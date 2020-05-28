var Http = function(options){
    var baseUrl = options.baseUrl;

    function ajax(url, data){
        options.url = baseUrl + url;
        options.data = data;
        return {
            then: function(success){
                options.success = success;
                return {
                    catch: function(error){
                        options.error = error;
                        $.ajax(options);
                    }
                }
            }
        }
    }
    
    return {
        get:function(url, data, async){
            options.async = (async === undefined) ? false : async;
            options.method = 'GET';
            return ajax(url, data);
        },
        post:function(url, data, async){
            options.async = (async === undefined) ? false : async;
            options.method = 'POST';
            return ajax(url, data);
        },
        put:function(url, data, async){
            options.async = (async === undefined) ? false : async;
            options.method = 'PUT';
            return ajax(url, data);
        },
        delete:function(url, data, async){
            options.async = (async === undefined) ? false : async;
            options.method = 'DELETE';
            return ajax(url, data);
        }
    }
}

var ATC = new Http({
    baseUrl:'http://localhost:8080',
    method:'',
    async:false,
    dataType: 'json',
    data: {},
    beforeSend: function(xhr) {
        var token = $("meta[name='_csrf']").attr("th:content");
        var header = $("meta[name='_csrf_header']").attr("th:content");
        xhr.setRequestHeader(header, token);
    },
    success: function(e){},
    error: function(e){}
})

var BARON = new Http({
    baseUrl:'http://apis.baron.com',
    method:'',
    async:false,
    dataType: 'json',
    data: {},
    beforeSend: function(xhr) {},
    success: function(e){},
    error: function(e){}
})

var SKB = new Http({
    baseUrl:'https://apis.skb.com',
    method:'',
    async:false,
    dataType: 'json',
    data: {},
    beforeSend: function(xhr) {},
    success: function(e){},
    error: function(e){}
})