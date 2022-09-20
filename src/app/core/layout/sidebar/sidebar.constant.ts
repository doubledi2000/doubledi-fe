import { SYSTEM_RULES } from 'src/app/shared/constant/authority.constant';
import { ROUTER_UTILS } from 'src/app/shared/utils/router.utils';

export const SidebarConstant = [
  {
    path: `${ROUTER_UTILS.base.dashboard}`,
    title: 'sidebar.dashboard',
    icon: '<span nz-icon nzType="appstore" nzTheme="outline"></span>',
    root: true,
    authorities: [],
  },
  {
    title: 'sidebar.booking',
    icon: '<span nz-icon nzType="book" nzTheme="outline"></span>',
    root: false,
    authorities: [],
    submenu: [
      {
        title: 'sidebar.list',
        authorities: [],
      },
      {
        title:'sidebar.booking',
        authorities: [],
      }
    ],
  },
  {
    title:'sidebar.statistic',
    icon: 'statistic',
    root: false,
    authorities: [],
  },
  {
    title: 'sidebar.categories',
    icon: 'categories',
    root: false,
    authorities: [],
    submenu: [
        {
            title: 'employment.title',
            authorities: []
        },
        {
            title: 'zoom-management.title',
            authorities: []
        },
        {
            title: 'voucher.title',
            authorities: []
        },
        {
            title: 'ticket.title',
            authorities: []
        },
        {
            title: 'showtimes.title',
            authorities: []
        },
        {
            title: 'film.title',
            authorities: []
        }
    ]
  }
];
