import React from 'react';
import styles from '../styles/Footer.module.css';

class Copyright extends React.Component {
  constructor(props) {
    super(props);
    this.state = { owner: 'Jonah Nannepaga',
    year: '2021' };
  }



  render() {
    return (
      <div className={styles.copyrightsection}>
        <p>Created by {this.state.owner} &copy;{this.state.year} (Next-JS)</p>
      </div>
    );
  }
}

export default Copyright;