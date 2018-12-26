export default class Movie {
    constructor(data) {
        Object.assign(this, data);
    }

    static reconstituteFrom(json) {
        // const state = {
        //     id: json['id'],
        //     name: json['name'],
        //     src: json['imageUrl']
        // };
        const state = {
            id: json['id'],
            category: json['category'],
            name: json['name'],
            year: json['year'],
            // phone: json['phone'],
            // website: json['website'],
            // company: json['company'],
            // image: json['image_url']

        };
        return new Movie(state);
    }
}