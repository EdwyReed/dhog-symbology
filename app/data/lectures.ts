export interface Lecture {
  title: string
  slug: string
  disabled?: boolean
}

export const introBlockLectures: Lecture[] = [
  { title: 'Знакомство с Символогией', slug: 'lecture-01' },
  { title: 'Виды символов', slug: 'lecture-02' },
  { title: 'Системы символов', slug: 'lecture-03' },
  { title: 'Интерпретация: чтение символа и его трактовка', slug: 'lecture-04' },
  { title: 'Итоги вводного блока', slug: 'lecture-05' }
]
