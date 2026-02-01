export interface Lecture {
  title: string
  slug: string
  disabled?: boolean
}

export const introBlockLectures: Lecture[] = [
  { title: 'Знакомство с Символогией', slug: 'lecture-01' },
  { title: 'Виды символов', slug: 'lecture-02' },
  { title: 'Интерпретация: как читать символ и доказывать трактовку', slug: 'lecture-03' },
  { title: 'Лекция 4', slug: 'lecture-04', disabled: true },
  { title: 'Лекция 5', slug: 'lecture-05', disabled: true }
]
