import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {TaskProps} from '../types/TypeProps';

const tableName = 'taskData';

enablePromise(true);

export const getDBConnection = async () => {
  return openDatabase({name: 'task-data.db', location: 'default'});
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  const query = `CREATE TABLE IF NOT EXISTS ${tableName}(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    date DATE NOT NULL,
    title TEXT NOT NULL,
    description TEXT NOT NULL
    );`;
  await db.executeSql(query);
};

export const getTaskItems = async (
  db: SQLiteDatabase,
): Promise<TaskProps[]> => {
  try {
    const taskItems: TaskProps[] = [];
    const results = await db.executeSql(
      `SELECT id, date, title, description FROM ${tableName}`,
    );
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        taskItems.push(result.rows.item(index));
      }
    });
    return taskItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get taskItems !!!');
  }
};

export const saveTaskItems = async (
  db: SQLiteDatabase,
  taskItems: TaskProps,
) => {
  const insertQuery =
    `INSERT OR REPLACE INTO ${tableName}( date, title, description) values` +
    `('${taskItems.date}', '${taskItems.title}', '${taskItems.description}')`;
  return db.executeSql(insertQuery);
};

export const deletetaskItem = async (db: SQLiteDatabase, id: number) => {
  const deleteQuery = `DELETE from ${tableName} where rowid = ${id}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;
  await db.executeSql(query);
};
