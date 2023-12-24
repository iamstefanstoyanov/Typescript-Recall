var ResType;
(function (ResType) {
    ResType[ResType["BOOK"] = 0] = "BOOK";
    ResType[ResType["AUTHOR"] = 1] = "AUTHOR";
    ResType[ResType["FILM"] = 2] = "FILM";
    ResType[ResType["DIRECTOR"] = 3] = "DIRECTOR";
    ResType[ResType["PERSON"] = 4] = "PERSON";
})(ResType || (ResType = {}));
var docOne = {
    uid: 1,
    resType: ResType.BOOK,
    data: { title: 'Name of wind' },
};
var docTwo = {
    uid: 12,
    resType: ResType.PERSON,
    data: { name: 'Stefan' },
};
console.log(docOne, docTwo);
