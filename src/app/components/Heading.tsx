import { Typography } from '@mui/material';
import React from 'react';

const Heading = ({
  primaryText,
  secondaryText,
  primaryStartIcon,
  primaryEndIcon,
}: {
  primaryText: string;
  secondaryText: string;
  primaryStartIcon?: React.ReactNode;
  primaryEndIcon?: React.ReactNode;
}) => {
  return (
    <>
      <Typography
        variant="h6"
        gutterBottom
        color="primary.dark"
        display="flex"
        alignItems="center"
        gap={1}
        mb={1}
      >
      {primaryStartIcon && primaryStartIcon}
      {primaryText}
      {primaryEndIcon && primaryEndIcon}
      </Typography>
      <Typography variant="h2" paragraph>
        {secondaryText}
      </Typography>
    </>
  );
};

export default Heading;
