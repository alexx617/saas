const log = console.log;
export default {
    customerAdd_list: {
        //基本信息
        name: { title: '姓名' },
        no: { title: '客户编号' },
        level: { title: '客户等级', trigger: 'change' },
        zclx: { title: '注册类型', trigger: 'change' },
        source: { title: '客户来源', trigger: 'change' },
        industry: { title: '客户行业', trigger: 'change' },
        feature: { title: '客户特征' },
        //取票方式
        fetchPerson: { title: '取票人' },
        fetchType: { title: '取票方式', trigger: 'change' },
        fetchTel: { title: '取票人电话' },
        fetchProvince: { title: '省', trigger: 'change' },
        fetchCity: { title: '市', trigger: 'change' },
        fetchArea: { title: '区', trigger: 'change' },
        fetchAddress: { title: '街道' },
        //工商信息
        gsbh: { title: '工商编号' },
        zczb: { title: '注册资本' },
        rjqx: { title: '经营期限' },
        clsj: { title: '成立时间' },
        djjg: { title: '登记机关', trigger: 'change' },
        zzjg: { title: '组织机构编码' },
        jyfw: { title: '经营范围' },
        zcdz: { title: '注册地址' },
        //银行信息
        bankProve: { title: '银行开户许可证明' },
        bankOpen: { title: '银行开户行', trigger: 'change' },
        bankNo: { title: '银行账号' },
        //税务信息
        taxNo: { title: '税务登记证号码' },
        stateTax: { title: '所属国税', trigger: 'change' },
        localTax: { title: '所属地税', trigger: 'change' },
        personTaxPassword: { title: '个税密码' },
        stateTaxPassword: { title: '国税下载密码' },
        declarePassword: { title: '综合申报密码' },
    }
}