import React from 'react';
import { Link } from 'react-router-dom';

const ClassList = ({ classes, title }) => {
  if (!classes.length) {
    return <h3>No Classs Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {classes &&
        classes.map(class1 => (
          <div key={class1._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${class1.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {class1.username}
              </Link>{' '}
              class1 on {class1.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/class1/${class1._id}`}>
                <p>{class1.classText}</p>
                <p className="mb-0">
                  Reactions: {class1.reactionCount} || Click to{' '}
                  {class1.reactionCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ClassList;
