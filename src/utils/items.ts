import { Items, MenuItems } from '@/interfaces/types'
import { SIDE_LABEL, URL } from './constants'

export const items: Items[] = [
  {
    icon: 'images/Accueil.svg',
    label: SIDE_LABEL.HOME,
    type: 'firstItem',
    pageUrl: URL.HOME_PAGE
  },
  {
    icon: 'images/Add.svg',
    label: SIDE_LABEL.ADD,
    type: 'firstItem',
    pageUrl: URL.POST_ABSENCE
  },
  {
    icon: 'images/Mon espace.svg',
    label: SIDE_LABEL.MY_SPACE,
    type: 'secondItem',
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Validation.svg',
    label: SIDE_LABEL.VALIDATION,
    type: 'secondItem',
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Indicateurs.svg',
    label: SIDE_LABEL.INDICATORS,
    type: 'secondItem',
    pageUrl: URL.PAGE_NOT_FOUND
  }
]

export const menuItems: MenuItems[] = [
  {
    icon: 'images/Module_Planning.svg',
    label: SIDE_LABEL.PLANNING,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_Absences.svg',
    label: SIDE_LABEL.ABSENCES,
    pageUrl: URL.LIST_ABSENCES
  },
  {
    icon: 'images/Module_Heures.svg',
    label: SIDE_LABEL.HOURS,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_NotedeFrais.svg',
    label: SIDE_LABEL.NOTES,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_Présence.svg',
    label: SIDE_LABEL.PRESENCE,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_Compétences.svg',
    label: SIDE_LABEL.COMPETENCES,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_SalaireetPAie.svg',
    label: SIDE_LABEL.SALARY,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_Entretiens.svg',
    label: SIDE_LABEL.ENTRETIEN,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_Matériels.svg',
    label: SIDE_LABEL.MATERIALS,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Mdule_Documents.svg',
    label: SIDE_LABEL.DOCUMENTS,
    pageUrl: URL.PAGE_NOT_FOUND
  },
  {
    icon: 'images/Module_RH.svg',
    label: SIDE_LABEL.RH,
    pageUrl: URL.PAGE_NOT_FOUND
  }
]
