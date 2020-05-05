export default {

    data : {
        ships : [],
        ship : {},
        ships_comparator : []
    },

    getShip() {
        fetch('https://api.starcitizen-api.com/IbI4VeKzwpK4zKyv7lAhcuxU0cAQ3sOv/v1/cache/ships', {
            method : 'GET',
        }).then((response) => response.json())
            .then((data) => {
                data.data.forEach((element) => {
                    if(element !== null) {
                        if(element.media[0].images.banner.search('https') !== 0) {
                            element.media[0].images.banner = "https://robertsspaceindustries.com" + element.media[0].images.banner;
                        }
                        // eslint-disable-next-line no-console
                        console.log(element)
                    }

                })
                this.data.ships = data.data;
            })
    },

    getShipById(id) {
        return fetch('https://api.starcitizen-api.com/IbI4VeKzwpK4zKyv7lAhcuxU0cAQ3sOv/v1/cache/ships?name='+id, {
            method :'GET',
        }).then((response) => response.json())
            .then((data) => {
                // eslint-disable-next-line no-console
                return data;
            })
    }
}
