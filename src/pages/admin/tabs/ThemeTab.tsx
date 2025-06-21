import React from 'react';
import { useAppContext } from '../../../context/AppContext';
import { themes, applyTheme } from '../../../utils/themes';
import { toast } from 'react-toastify';

const ThemeTab: React.FC = () => {
  const { state, updateSettings } = useAppContext();

  const handleThemeChange = (themeId: string) => {
    const selectedTheme = themes.find(theme => theme.id === themeId);
    if (selectedTheme) {
      applyTheme(selectedTheme);
      updateSettings({ theme: themeId });
      toast.success(`Theme changed to ${selectedTheme.name}`);
    }
  };

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl mb-6 font-semibold">Choose Your Wedding Theme</h3>
        <p className="text-gray-600 mb-8">Select a color theme that matches your wedding style. This will apply to both admin and guest interfaces.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {themes.map((theme) => (
            <div 
              key={theme.id}
              className={`border-2 rounded-lg p-4 cursor-pointer transition-all duration-300 hover:shadow-lg ${
                state.settings.theme === theme.id 
                  ? 'border-rose-500 bg-rose-50' 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => handleThemeChange(theme.id)}
            >
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-gray-800">{theme.name}</h4>
                {state.settings.theme === theme.id && (
                  <div className="w-5 h-5 bg-rose-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="flex space-x-2 mb-3">
                <div 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: theme.primary }}
                  title="Primary Color"
                ></div>
                <div 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: theme.secondary }}
                  title="Secondary Color"
                ></div>
                <div 
                  className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: theme.accent }}
                  title="Accent Color"
                ></div>
              </div>
              
              <div className="text-xs text-gray-500">
                Click to apply this theme
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemeTab;