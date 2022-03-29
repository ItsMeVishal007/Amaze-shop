import HomePage from '@components/HomePage';
import MetaData from '@components/reusable/MetaData';
import { NextPage } from 'next';
import React from 'react';

const home: NextPage = (): JSX.Element => {
  return (
    <>
      <MetaData title="home" />
      <HomePage />
    </>
  );
};

export default home;