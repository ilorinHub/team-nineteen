import "react-native-gesture-handler";
import ThemeManager from "./src/components/organisms/ThemeManager";
import AppRoutes from "./src/AppRoutes";

export default function App() {
  return (
    <ThemeManager>
      <AppRoutes />
    </ThemeManager>
  );
}
