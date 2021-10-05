import * as functions from "firebase-functions";
import { db } from './../init';
import { firestore } from 'firebase-admin/lib/firestore';
import FieldValue = firestore.FieldValue;

export default async (snap, context) => {
    functions.logger.debug(`running add course trigger for courseId ${context.params.courseId}`);
    const course = snap.data();
    if (course.promo) {

        return db.doc('courses/stats').update({
            totalPromo: FieldValue.increment(1)
        })

        // return db.runTransaction(async transaction => {
        //     const counterRef = db.doc('courses/stats');
        //     const snap = await transaction.get(counterRef);
        //     const stats = snap.data() ?? {totalPromo: 0};
        //     stats.totalPromo += 1;
        //     transaction.set(counterRef, stats);
        // });

    }
}