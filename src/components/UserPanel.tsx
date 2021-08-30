import React, { HTMLProps } from 'react';
import useUser from '../hooks/useUser';

interface UserPanelProps extends HTMLProps<HTMLDivElement> {

}

/**
 * Component for displaying information about the current User.
 */
const UserPanel = ({ ...props }: UserPanelProps) => {
  const user = useUser();

  return (
    <div className="p-3 text-center" {...props}>
      {user?.images.length ? (
        <img
          alt={user?.display_name}
          src={user?.images[0].url}
          className="rounded-circle w-75 d-none d-sm-inline-block"
        />
      ) : undefined}

      <div className="d-flex d-sm-block">
        <h3 className="text-lowercase">
          {user?.display_name}
        </h3>

        <a className="btn btn-link btn-sm ms-auto" href="#">
          Logout
        </a>
      </div>
    </div>
  );
};

export default UserPanel;
