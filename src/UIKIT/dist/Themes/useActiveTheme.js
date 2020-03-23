import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
function useActiveTheme() {
    return useContext(ThemeContext);
}
export default useActiveTheme;
