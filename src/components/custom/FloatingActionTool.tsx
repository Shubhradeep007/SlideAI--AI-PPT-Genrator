import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Sparkles, X } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

type FloatingActionToolProps = {
  position: { x: number; y: number } | null;
  onClose: () => void;
  loading: boolean;
  handleAiChange: (prompt: string) => void;
};

function FloatingActionTool({ position, onClose, loading, handleAiChange }: FloatingActionToolProps) {
  const [prompt, setPrompt] = useState('');

  if (!position) return null;

  const handleSubmit = () => {
    if (prompt.trim()) {
      handleAiChange(prompt);
      setPrompt('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div
      className="fixed z-50 animate-in fade-in-0 zoom-in-95 bg-black text-white/60"
      style={{
        left: `${position.x}px`,
        top: `${position.y + 10}px`,
        transform: 'translateX(-50%)',
      }}
    >
      <Card className="w-80 shadow-xl border-2">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <CardTitle className="text-lg">AI Edit</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6"
              onClick={onClose}
              disabled={loading}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <CardDescription className="text-xs">
            Describe what you want to change in this element
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <Textarea
            placeholder="E.g., Change the text to 'Welcome!', Make the image darker, Add a gradient background..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={handleKeyDown}
            className="min-h-[80px] text-sm resize-none"
            disabled={loading}
            autoFocus
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Press <kbd className="px-1 py-0.5 text-xs border rounded">Ctrl+Enter</kbd> to submit
            </p>
            <Button
              size="sm"
              onClick={handleSubmit}
              disabled={loading || !prompt.trim()}
              className="gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Apply AI Edit
                </>
              )}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default FloatingActionTool;
