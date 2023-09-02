import { FC } from 'react';
import cn from "classnames";
import MapComponent from "@/src/components/ui/map/MapComponent";
import Meta from "@/src/components/utils/meta/Meta";

const AboutUs: FC = () => {
  return(
  <Meta title='О нас' description='Mus&co - кто мы, информация об организации'>
  <div className={cn('wrapper')}>
    <MapComponent />
  </div>
  </Meta>)
};

export default AboutUs;
