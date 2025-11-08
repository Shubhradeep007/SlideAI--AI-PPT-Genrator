import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, MousePointerClick, Wand2 } from 'lucide-react';

function AiEditGuide() {
  return (
    <Card className="bg-gradient-to-br from-purple-50 to-blue-50 border-purple-200">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <CardTitle className="text-lg">AI Inline Editing</CardTitle>
        </div>
        <CardDescription>Edit any element on your slides with AI</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <MousePointerClick className="w-5 h-5 text-blue-600" />
          </div>
          <div>
            <p className="font-medium text-sm">Step 1: Click any element</p>
            <p className="text-xs text-muted-foreground">
              Click on any text, image, or component in your slide to select it
            </p>
          </div>
        </div>
        
        <div className="flex items-start gap-3">
          <div className="mt-1">
            <Wand2 className="w-5 h-5 text-purple-600" />
          </div>
          <div>
            <p className="font-medium text-sm">Step 2: Describe your changes</p>
            <p className="text-xs text-muted-foreground">
              Type what you want to change in the AI prompt box that appears
            </p>
          </div>
        </div>

        <div className="bg-white/60 rounded-lg p-3 mt-3">
          <p className="text-xs font-medium mb-2">Example prompts:</p>
          <ul className="text-xs text-muted-foreground space-y-1">
            <li>• "Change heading to 'Welcome to Our Platform'"</li>
            <li>• "Make the background gradient blue to purple"</li>
            <li>• "Change image to a modern office workspace"</li>
            <li>• "Add a shadow effect to this card"</li>
            <li>• "Make text larger and bold"</li>
          </ul>
        </div>

        <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2 border-t">
          <kbd className="px-2 py-1 bg-white rounded border">Esc</kbd>
          <span>to deselect</span>
          <span className="mx-2">•</span>
          <kbd className="px-2 py-1 bg-white rounded border">Ctrl+Enter</kbd>
          <span>to apply</span>
        </div>
      </CardContent>
    </Card>
  );
}

export default AiEditGuide;
