// REACT/REDUX
import React from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import { Card, CardHeader, CardText } from 'material-ui/Card';

const UserComments = ({ profile }) => {
  const renderUserComments = () => profile.comments.map(comment => (
    <li key={comment._id} >
      <Card>
        <CardHeader
          title={comment.body}
          subtitle={comment.createdAt}
        />
        <CardText>
              Resource : {comment.resource.title}
          <br />
              URL : {comment.resource.url}
        </CardText>
      </Card>
    </li>
      ));
  return (
    <div style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto' }} >
      <ul style={{ listStyleType: 'none' }}>
        {renderUserComments()}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    profile: state.profile,
  };
}
export default connect(mapStateToProps)(UserComments);
