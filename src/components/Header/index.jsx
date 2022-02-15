import React, { useReducer } from 'react';
import classnames from 'classnames';

const initialValue = {
  label: 'Light Mode',
  icon: 'pi-sun',
  isDark: true,
};

const colorReducer = (_, action) => {
  switch (action.type) {
    case 'DARK_MODE':
      return initialValue;

    default:
      return {
        label: 'Dark Mode',
        icon: 'pi-moon',
        isDark: false,
      };
  }
};

function Header() {
  // const [colorMode, setColorMode] = useState('light');

  const [color, dispatchColor] = useReducer(colorReducer, initialValue);

  const onColorClick = () => {
    dispatchColor({ type: color.isDark ? 'LIGHT_MODE' : 'DARK_MODE' });

    // eslint-disable-next-line no-undef
    const { classList } = document.documentElement;

    if (color.isDark) classList.add('dark');
    else classList.remove('dark');
  };

  return (
    <div className="bg-white dark:bg-dark-blue flex flex-row justify-between px-14 py-3 shadow-md">
      <div className="font-bold self-center">Where in the world?</div>
      <button
        type="button"
        onClick={onColorClick}
        className="bg-inherit border-0 font-semibold p-2 flex flex-row"
      >
        <span
          className={classnames('pi mr-2 font-medium self-center', color.icon)}
        />
        {color.label}
      </button>
    </div>
  );
}

export default Header;
