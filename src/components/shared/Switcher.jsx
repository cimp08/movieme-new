import { useState } from 'react';
import { useDarkSide } from '../../hooks/useDarkSide';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const Switcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(
    colorTheme === 'light' ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };

  return (
    <div>
      <DarkModeSwitch
        checked={darkSide}
        onChange={toggleDarkMode}
        size={20}
        sunColor={'#4b5563'}
        moonColor={'#fff'}
      />
    </div>
  );
};

export default Switcher;
