/**
 * Created by ystyle on 15-3-18.
 */
Errors = new Mongo.Collection(null);

throwError = function (message) {
    Errors.insert({message:message});
};