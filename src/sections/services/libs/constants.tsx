import { UilArrow, UilEdit, UilWebGrid } from '@iconscout/react-unicons';
import { type Specialty } from './types';

const SERVICE_LIST = [
  'I develop the user interface.',
  'Web page development.',
  'I create ux element interactions.',
  'I position your company brand.',
  'Design and mockups of products for companies.',
];

const SPECIALTIES: Specialty[] = [
  {
    displayTitle: (
      <>
        Product <br /> Designer
      </>
    ),
    icon: UilWebGrid,
    title: 'Product Designer',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: SERVICE_LIST,
  },
  {
    displayTitle: (
      <>
        Ui/Ux <br /> Designer
      </>
    ),
    icon: UilArrow,
    title: 'Ui/Ux Designer',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: SERVICE_LIST,
  },
  {
    displayTitle: (
      <>
        Visual <br /> Designer
      </>
    ),
    icon: UilEdit,
    title: 'Visual Designer',
    description:
      'Service with more than 3 years of experience. Providing quality work to clients and companies.',
    services: SERVICE_LIST,
  },
];

export { SPECIALTIES };
