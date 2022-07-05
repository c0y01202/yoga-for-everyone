import React from 'react';
import { useParams } from 'react-router-dom';

import ReactionList from '../components/ReactionList';
import ReactionForm from '../components/ReactionForm';

import Auth from '../utils/auth';
import { useQuery } from '@apollo/client';
import { QUERY_THOUGHT } from '../utils/queries';

const SingleClass = (props) => {
  const { id: classId } = useParams();

  const { loading, data } = useQuery(QUERY_THOUGHT, {
    variables: { id: classId },
  });

  const class1 = data?.class1 || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {class1.username}
          </span>{' '}
          booked a class on {class1.createdAt}
        </p>
        <div className="card-body">
          <p>{class1.classText}</p>
        </div>
      </div>

      {class1.reactionCount > 0 && (
        <ReactionList reactions={class1.reactions} />
      )}

      {Auth.loggedIn() && <ReactionForm classId={class1._id} />}
    </div>
  );
};

export default SingleClass;
