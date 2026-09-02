interface MenuItem {
  icon: string;
  label: string;
  to: string;
  separator: boolean;
}

interface MenuItem {
  icon: string;
  label: string;
  to: string;
  separator: boolean;
}

interface SignUpFormData {
  fullName: string;
  email: string;
  handle: string;
  password: string;
  confirmPassword: string;
}

interface SignUpFieldConfig {
  key: keyof SignUpFormData;
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'password';
  hasTooltip?: boolean;
}
