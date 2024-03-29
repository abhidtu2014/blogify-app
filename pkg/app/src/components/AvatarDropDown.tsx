import { FC } from 'react';
import { Avatar, Dropdown } from 'flowbite-react';
import { User } from '../interfaces/db';

interface AvatarDropdownProps {
  user: User | null;
  logout: () => Promise<void>;
}

export const AvatarDropDown: FC<AvatarDropdownProps> = ({ user, logout }): JSX.Element => {
  return (
    <Dropdown
      label={
        <Avatar
          alt="User settings"
          img={user?.photoURL ? user.photoURL : undefined}
          rounded={true}
        />
      }
      arrowIcon={false}
      inline={true}
    >
      <Dropdown.Header>
        <span className="block text-sm">{user?.displayName}</span>
        <span className="block truncate text-sm font-medium">{user?.email}</span>
      </Dropdown.Header>
      <Dropdown.Item>
        <p className="text-gray-400">Dashboard</p>
      </Dropdown.Item>
      <Dropdown.Item>
        <p className="text-gray-400">Settings</p>
      </Dropdown.Item>
      <Dropdown.Item>
        <p className="text-gray-400">Earnings</p>
      </Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
    </Dropdown>
  );
};
