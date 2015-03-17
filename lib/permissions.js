/**
 * Created by ystyle on 15-3-18.
 */
ownsDocument = function (userID,doc) {
    return doc && doc.userId === userID;
}