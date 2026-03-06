export default class Meal {
    constructor(
        public id: any,
        public categoryIds: any,
        public title: any,
        public affordability: any,
        public complexity: any,
        public imageUrl: any,
        public duration: any,
        public ingredients: any,
        public steps: any,
        public isGlutenFree: any,
        public isVegan: any,
        public isVegatarian: any,
        public isLactoseFree: any,
    ) {}
}