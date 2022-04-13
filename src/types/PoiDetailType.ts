import { PoiType } from './PoiType';
import { ResourceType } from './ResourceType';
import { TagType } from './TagType';
import { TranslationType } from './TranslationType';

export type PoiDetail = {
  poi: PoiType;
  translations: TranslationType[];
  resources: ResourceType[];
  tags: TagType[];
};
