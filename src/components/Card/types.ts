export interface CardProps {
    title: string; // Заголовок картки
    description: any; // Опис картки
    className?: string; // Додаткові класи
    imageUrl?: string; // URL зображення
    children?: React.ReactNode; // Дочірні елементи
    onClick?: () => void; // Функція, яка викликається при кліку
  }
  