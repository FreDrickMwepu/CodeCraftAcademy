export interface Program {
    id: number;
    title: string;
    description: string;
    duration: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

export interface HeaderProps {
    title: string;
}

export interface FooterProps {
    year: number;
}