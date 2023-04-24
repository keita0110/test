(() => {

    async function getLists(name) {
        // fetch メソッド  resource 引数
        const url = new URL('https://geocoding-api.open-meteo.com/v1/search');
        url.search = new URLSearchParams({ name: name, language: 'ja', count: 100 });

        const resource = url.href;
        // fetch メソッド  init 引数
        const init = { method: 'GET' };

        // Promise.prototype.then メソッド  onFulfilled 引数
        /**
         * @param {Response} value
         * @returns {Promise}
         */
        const onFulfilled = (value) => {
            if (!value.ok) {
                // HTTPステータスコードが 200~299 以外の場合にエラー
                console.error('リクエスト失敗');
                throw new Error(value.status + ' (' + value.statusText + ')');
            }
            return value.json();
        };
        // Promise.prototype.then メソッド  onRejected 引数
        const onRejected = (reason) => {
            console.error('リクエスト失敗');
            throw reason;
        };

        // fetch メソッド実行  await でレスポンスが返ってくるまで待ち、結果(JSON)をobjに代入
        return fetch(resource, init).then(onFulfilled, onRejected);
    }

    function addList(name) {
        const tables = document.getElementById('tableResult');

        const tr = tables.tBodies[0].insertRow(-1);
        const country = document.createElement('td');
        const names = document.createElement('td');
        const latitude = document.createElement('td');
        const longitude = document.createElement('td');

        country.innerText = name.country;
        names.innerText = name.name;
        latitude.innerText = name.latitude;
        longitude.innerText = name.longitude;

        tr.appendChild(country);
        tr.appendChild(names);
        tr.appendChild(latitude);
        tr.appendChild(longitude);

        console.log(tr)
    }

    async function Lists() {
        const set = document.getElementById('tableResultRow');

        const $buttonSearch = document.getElementById('buttonSearch');
        $buttonSearch.disabled = true;
        const name = document.getElementById('inputName').value;
        document.getElementById('spanName').textContent = name;

        const listNames = await getLists(name);
        set.innerHTML = '';
        listNames.results.forEach(addList);
        set.innerHTML = '';

        $buttonSearch.disabled = false;

    }

    window.addEventListener('load', Lists);

    const button = document.getElementById('buttonSearch');
    button.addEventListener('click', Lists);
})();