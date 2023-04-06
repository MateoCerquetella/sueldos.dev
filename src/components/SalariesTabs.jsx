import { TabList, Tab } from '@tremor/react';
import { IconCash, IconUsersGroup, IconFilter } from '@tabler/icons-react';

export function SalariesTabs({ activeSection }) {
  const handleNavigation = (hash) => {
    location.hash = hash;
    document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <TabList
      value={activeSection}
      onValueChange={(value) => handleNavigation(value)}
      className="sticky top-0 z-50 justify-center mt-6 text-center bg-white"
    >
      <Tab value="salaries-general" text="Resultados generales" icon={IconCash} />
      <Tab value="salaries-users" text="Perfil encuestados" icon={IconUsersGroup} />
      <Tab value="salaries-filter" text="Filtrar resultados" icon={IconFilter} />
    </TabList>
  );
}
