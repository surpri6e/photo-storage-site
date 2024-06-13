import { doc, setDoc } from 'firebase/firestore';
import { IQuestion } from '../types/IQuestion';
import { getRandomKey } from 'rkey';
import { db } from '../main';

export const createQuestionInDatabase = async (question: IQuestion) => {
    await setDoc(doc(db, 'support', getRandomKey(10, 'all')), question as IQuestion);
};
