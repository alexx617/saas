import Mock from 'mockjs'

Mock.mock('/login/', 'get', function() {
    return Mock.mock({
        "user|1-3": [{
            'name': '@cname',
            'id': 88
        }
      ]
    });
});