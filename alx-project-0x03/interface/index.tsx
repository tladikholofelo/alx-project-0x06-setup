interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

interface PageRouteProps {
  pageRoute: string;
}

interface LayoutProps {
  children: ReactNode;
}
