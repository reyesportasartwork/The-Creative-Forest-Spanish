import React, { useRef, useState, useEffect } from 'react';
import { Pencil, Eraser, RotateCcw, Sparkles } from 'lucide-react';

interface InteractiveSketchAreaProps {
  initialPrompt?: string;
  compact?: boolean;
}

export const InteractiveSketchArea: React.FC<InteractiveSketchAreaProps> = ({
  initialPrompt = "Dibuja un árbol del bosque o tu personaje favorito",
  compact = false,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [color, setColor] = useState('#1D1B1B');
  const [brushSize, setBrushSize] = useState(3);
  const [hasDrawn, setHasDrawn] = useState(false);
  const [activePrompt, setActivePrompt] = useState(initialPrompt);

  const prompts = [
    "Un zorro que habla español en el bosque",
    "La casa del árbol secreta de Winnie",
    "Tu superhéroe favorito inventando una poción",
    "Una hoja mágica que susurra palabras",
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set display resolution vs internal canvas resolution
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    // Draw gentle guide background
    drawGuide(ctx, rect.width, rect.height);
  }, []);

  const drawGuide = (ctx: CanvasRenderingContext2D, w: number, h: number) => {
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, w, h);

    // Subtle guide
    ctx.save();
    ctx.strokeStyle = '#E5E2DC';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);

    ctx.beginPath();
    ctx.arc(w - 35, 35, 18, 0, Math.PI * 2);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(15, h - 25);
    ctx.quadraticCurveTo(w / 2, h - 45, w - 15, h - 25);
    ctx.stroke();
    ctx.restore();
  };

  const getCanvasCoords = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();

    let clientX = 0;
    let clientY = 0;

    if ('touches' in e) {
      if (e.touches.length === 0) return { x: 0, y: 0 };
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    setIsDrawing(true);
    setHasDrawn(true);
    const { x, y } = getCanvasCoords(e);

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.strokeStyle = color;
    ctx.lineWidth = brushSize;
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { x, y } = getCanvasCoords(e);
    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    drawGuide(ctx, rect.width, rect.height);
    setHasDrawn(false);
  };

  const pickRandomPrompt = () => {
    const remaining = prompts.filter((p) => p !== activePrompt);
    const random = remaining[Math.floor(Math.random() * remaining.length)];
    setActivePrompt(random);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Sketch prompt bar */}
      <div className="w-full flex items-center justify-between gap-2 mb-2 px-1">
        <div className="flex items-center gap-1.5 text-xs text-[#1D1B1B] font-sans font-bold uppercase tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#E86A33] inline-block"></span>
          <span>Dibujo del Día en Español</span>
        </div>
        <button
          type="button"
          onClick={pickRandomPrompt}
          className="text-xs font-sans flex items-center gap-1 text-[#555] hover:text-[#E86A33] cursor-pointer bg-white px-3 py-1 rounded-full border border-[#E5E2DC]"
          title="Cambiar reto de dibujo"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFC947]" />
          <span>Otro reto</span>
        </button>
      </div>

      <div className="w-full text-sm text-[#444] mb-2 italic font-gaegu text-center text-base">
        "{activePrompt}"
      </div>

      {/* Canvas container with Variation 4 rounded styling */}
      <div className="relative w-full rounded-[24px] border border-[#E5E2DC] overflow-hidden bg-white shadow-xs">
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className={`w-full ${compact ? 'h-[140px]' : 'h-[175px]'} cursor-crosshair touch-none block`}
        />

        {!hasDrawn && (
          <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center opacity-40 text-center p-3">
            <span className="font-sans text-xs uppercase tracking-widest text-[#1D1B1B] font-bold">
              [ DIBUJA AQUÍ TU IDEA ]
            </span>
            <span className="text-sm font-gaegu text-[#1D1B1B] mt-0.5">
              Arrastra el ratón o el dedo para dibujar
            </span>
          </div>
        )}
      </div>

      {/* Mini Palette and Controls in Variation 4 style */}
      <div className="w-full flex items-center justify-between mt-3 px-1">
        {/* Colors */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setColor('#1D1B1B')}
            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
              color === '#1D1B1B' ? 'scale-110 border-[#E86A33]' : 'border-transparent'
            }`}
            style={{ backgroundColor: '#1D1B1B' }}
            title="Tinta Negra"
          />
          <button
            type="button"
            onClick={() => setColor('#E86A33')}
            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
              color === '#E86A33' ? 'scale-110 border-[#1D1B1B]' : 'border-transparent'
            }`}
            style={{ backgroundColor: '#E86A33' }}
            title="Terracota"
          />
          <button
            type="button"
            onClick={() => setColor('#FFC947')}
            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
              color === '#FFC947' ? 'scale-110 border-[#1D1B1B]' : 'border-transparent'
            }`}
            style={{ backgroundColor: '#FFC947' }}
            title="Oro Soleado"
          />
          <button
            type="button"
            onClick={() => setColor('#39734D')}
            className={`w-6 h-6 rounded-full border-2 cursor-pointer transition-transform ${
              color === '#39734D' ? 'scale-110 border-[#1D1B1B]' : 'border-transparent'
            }`}
            style={{ backgroundColor: '#39734D' }}
            title="Verde Bosque"
          />
        </div>

        {/* Clear and tool action */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={clearCanvas}
            className="flex items-center gap-1 text-xs text-[#555] hover:text-[#E86A33] px-3 py-1 rounded-full bg-white border border-[#E5E2DC] cursor-pointer font-sans"
            title="Borrar lienzo"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Limpiar</span>
          </button>
        </div>
      </div>
    </div>
  );
};
