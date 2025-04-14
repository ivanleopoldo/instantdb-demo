import { init, i, InstaQLEntity } from '@instantdb/react-native';

const _schema = i.schema({
  entities: {
    notes: i.entity({
      title: i.string(),
      description: i.string(),
    }),
  },
});

type _AppSchema = typeof _schema;
interface AppSchema extends _AppSchema {}
const schema: AppSchema = _schema;

export type { AppSchema };
export { schema };

const db = init({ appId: process.env.EXPO_PUBLIC_INSTANT_APP_ID!, schema });
export default db;
