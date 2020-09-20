import React from 'react';
import { ShopifixServiceConsumer } from '../shopifix-service-context';

const withShopifixService = () => (Wrapped) => {

  return (props) => {
    return (
      <ShopifixServiceConsumer>
        {
          (shopifixService) => {
            return (<Wrapped {...props} shopifixService={shopifixService}/>);
          }
        }
      </ShopifixServiceConsumer>
    );
  }
};

export default withShopifixService;
