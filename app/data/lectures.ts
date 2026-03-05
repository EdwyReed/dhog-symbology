export interface Lecture {
  title: string
  slug: string
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

export const introBlockLectures: Lecture[] = [
  { title: 'Знакомство с Символогией', slug: 'lecture-01', variant: 'primary' },
  { title: 'Виды символов', slug: 'lecture-02', variant: 'primary' },
  { title: 'Системы символов', slug: 'lecture-03', variant: 'primary' },
  { title: 'Интерпретация: чтение символа и его трактовка', slug: 'lecture-04', variant: 'primary' },
  { title: 'Итоги вводного блока', slug: 'lecture-05', variant: 'primary' },
  { title: 'Контрольная работа №1', slug: 'control-work', variant: 'secondary' }
]
