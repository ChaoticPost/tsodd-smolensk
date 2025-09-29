export interface Document {
  id: string;
  title: string;
  type: 'pdf' | 'doc' | 'xls' | 'zip';
  size: string;
  date: string;
  category: string;
  description: string;
  url: string;
  isRequired: boolean;
}

export const documentsData: Document[] = [
  {
    id: 'ustav',
    title: 'Устав СОГБУ "ЦОДД"',
    type: 'pdf',
    size: '0.8 МБ',
    date: '2023-12-01',
    category: 'Учредительные документы',
    description: 'Устав Смоленского областного государственного бюджетного учреждения "Центр организации дорожного движения"',
    url: '/documents/1_ustav.pdf',
    isRequired: true
  },
  {
    id: 'reorganization-order',
    title: 'Распоряжение о реорганизации',
    type: 'pdf',
    size: '0.5 МБ',
    date: '2023-11-15',
    category: 'Учредительные документы',
    description: 'Распоряжение о реорганизации путем выделения из состава УОАД',
    url: '/documents/1_1_rasporyazhenie-o-reorganizatsii.pdf',
    isRequired: true
  },
  {
    id: 'law',
    title: 'Законодательные акты',
    type: 'pdf',
    size: '1.2 МБ',
    date: '2023-12-01',
    category: 'Нормативные документы',
    description: 'Федеральные законы и нормативные акты, регулирующие деятельность ЦОДД',
    url: '/documents/Law.pdf',
    isRequired: true
  },
  {
    id: 'memo',
    title: 'Памятка',
    type: 'pdf',
    size: '0.3 МБ',
    date: '2023-12-01',
    category: 'Информационные материалы',
    description: 'Памятка о деятельности Центра организации дорожного движения',
    url: '/documents/Memo.pdf',
    isRequired: false
  },
  {
    id: 'inn',
    title: 'ИНН ЦОДД',
    type: 'pdf',
    size: '0.2 МБ',
    date: '2023-12-01',
    category: 'Регистрационные документы',
    description: 'Свидетельство о постановке на учет в налоговом органе (ИНН)',
    url: '/documents/2_INN_CODD.pdf',
    isRequired: true
  },
  {
    id: 'ogrn',
    title: 'ОГРН - Свидетельство о регистрации ЦОДД',
    type: 'pdf',
    size: '0.4 МБ',
    date: '2023-12-01',
    category: 'Регистрационные документы',
    description: 'Свидетельство о государственной регистрации юридического лица (ОГРН)',
    url: '/documents/3_OGRN_Svidetelstvo-o-registratsii-CODD.pdf',
    isRequired: true
  },
  {
    id: 'director-appointment',
    title: 'Распоряжение о назначении директора',
    type: 'pdf',
    size: '0.3 МБ',
    date: '2023-12-01',
    category: 'Кадровые документы',
    description: 'Распоряжение о назначении директора СОГБУ "ЦОДД"',
    url: '/documents/4_Rasporyazhenie-o-naznachenii-direktora.pdf',
    isRequired: true
  },
  {
    id: 'work-conditions-assessment',
    title: 'Сводная ведомость результатов проведения специальной оценки условий труда',
    type: 'pdf',
    size: '0.6 МБ',
    date: '2023-12-01',
    category: 'Охрана труда',
    description: 'Результаты специальной оценки условий труда в организации',
    url: '/documents/svodnaya-vedomost-rezultatov-provedeniya-spetsialnoy-otsenki-usloviy-truda.pdf',
    isRequired: true
  },
  {
    id: 'charter-changes',
    title: 'Распоряжение о внесении изменений в Устав',
    type: 'pdf',
    size: '0.4 МБ',
    date: '2023-12-01',
    category: 'Учредительные документы',
    description: 'Распоряжение о внесении изменений в Устав СОГБУ "ЦОДД"',
    url: '/documents/5_Rasporyazhenie-o-vnesenii-izmeneniy-v-Ustav.pdf',
    isRequired: true
  }
];

export const documentCategories = [
  'Все',
  'Учредительные документы',
  'Регистрационные документы',
  'Кадровые документы',
  'Нормативные документы',
  'Охрана труда',
  'Информационные материалы'
];
