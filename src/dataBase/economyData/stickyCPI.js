const stickyCpi = [
  [-65815200000, 3.383497007],
  [-63136800000, 3.659987292],
  [-60458400000, 3.682012499],
  [-57952800000, 4.151667589],
  [-55274400000, 4.165427174],
  [-52686000000, 4.097704474],
  [-50007600000, 4.557597098],
  [-47415600000, 4.766361188],
  [-44737200000, 4.960194431],
  [-42058800000, 4.961849181],
  [-39466800000, 5.198351909],
  [-36784800000, 5.414944837],
  [-34192800000, 5.72486893],
  [-31514400000, 5.765763045],
  [-28836000000, 5.769158001],
  [-26416800000, 6.143376532],
  [-23738400000, 6.524447618],
  [-21150000000, 6.799346963],
  [-18471600000, 6.392103407],
  [-15879600000, 6.404961413],
  [-13201200000, 6.430385766],
  [-10522800000, 6.850795793],
  [-7930800000, 6.574721234],
  [-5248800000, 6.451706907],
  [-2656800000, 6.425116862],
  [21600000, 6.628279061],
  [2700000000, 7.09144749],
  [5119200000, 7.030543696],
  [7797600000, 6.855423125],
  [10386000000, 6.98585698],
  [13064400000, 7.191308106],
  [15656400000, 7.04714037],
  [18334800000, 7.154475413],
  [21013200000, 7.121184091],
  [23605200000, 7.097174731],
  [26287200000, 7.376794582],
  [28879200000, 7.381000774],
  [31557600000, 7.042661405],
  [34236000000, 6.360389898],
  [36655200000, 5.533559236],
  [39333600000, 5.338291383],
  [41922000000, 5.094236396],
  [44600400000, 5.273268229],
  [47192400000, 5.199542864],
  [49870800000, 4.947926701],
  [52549200000, 4.707522595],
  [55141200000, 4.41123702],
  [57823200000, 3.978662385],
  [60415200000, 3.708040621],
  [63093600000, 3.755946258],
  [65772000000, 3.864643731],
  [68277600000, 4.078580445],
  [70956000000, 3.991015808],
  [73544400000, 3.880713129],
  [76222800000, 3.504240606],
  [78814800000, 3.481835749],
  [81493200000, 3.380601319],
  [84171600000, 3.137835466],
  [86763600000, 3.344140047],
  [89445600000, 3.281095844],
  [92037600000, 3.153985901],
  [94716000000, 2.847928102],
  [97394400000, 2.886258664],
  [99813600000, 2.934248028],
  [102492000000, 3.036614659],
  [105080400000, 3.180735955],
  [107758800000, 3.104206448],
  [110350800000, 3.018552356],
  [113029200000, 3.329072164],
  [115707600000, 3.952644678],
  [118299600000, 4.775638756],
  [120981600000, 4.938670847],
  [123573600000, 5.319843098],
  [126252000000, 5.857506965],
  [128926800000, 6.303969131],
  [131346000000, 6.831393725],
  [134024400000, 7.120384207],
  [136616400000, 7.749650582],
  [139294800000, 8.640321526],
  [141886800000, 9.552860371],
  [144565200000, 10.130319088],
  [147243600000, 10.621603911],
  [149835600000, 10.591306867],
  [152517600000, 11.017162794],
  [155109600000, 11.527439415],
  [157788000000, 11.65667686],
  [160466400000, 11.816414421],
  [162882000000, 11.603717425],
  [165560400000, 11.729239119],
  [168152400000, 10.951529411],
  [170830800000, 10.45505733],
  [173422800000, 9.787927045],
  [176101200000, 8.938380195],
  [178779600000, 8.554354053],
  [181371600000, 8.142102792],
  [184053600000, 8.13591166],
  [186645600000, 7.727553082],
  [189324000000, 7.741363545],
  [192002400000, 7.425762409],
  [194508000000, 7.388426262],
  [197186400000, 6.899629973],
  [199774800000, 7.018298581],
  [202453200000, 6.922850698],
  [205045200000, 7.140992224],
  [207723600000, 7.405380061],
  [210402000000, 7.125381525],
  [212994000000, 6.910786682],
  [215676000000, 6.633941823],
  [218268000000, 6.218614511],
  [220946400000, 6.062302309],
  [223624800000, 6.063399587],
  [226044000000, 6.112229251],
  [228722400000, 6.591159521],
  [231310800000, 6.751544987],
  [233989200000, 6.930956833],
  [236581200000, 6.892219332],
  [239259600000, 6.843199666],
  [241938000000, 6.883555545],
  [244530000000, 6.96244877],
  [247212000000, 7.010588577],
  [249804000000, 7.387469073],
  [252482400000, 7.395951567],
  [255160800000, 7.365140892],
  [257580000000, 7.457868288],
  [260258400000, 7.437211324],
  [262846800000, 7.667650906],
  [265525200000, 7.705467144],
  [268117200000, 7.939210957],
  [270795600000, 8.204046896],
  [273474000000, 8.605577994],
  [276066000000, 9.062421667],
  [278748000000, 9.237557806],
  [281340000000, 9.071115875],
  [284018400000, 9.083750922],
  [286696800000, 9.586034706],
  [289116000000, 9.689852424],
  [291794400000, 9.934098639],
  [294382800000, 10.09794116],
  [297061200000, 10.284819787],
  [299653200000, 10.521237318],
  [302331600000, 10.954395743],
  [305010000000, 11.002540622],
  [307602000000, 11.279514365],
  [310284000000, 11.951758189],
  [312876000000, 12.761858458],
  [315554400000, 13.499249243],
  [318232800000, 13.627778119],
  [320738400000, 14.361385885],
  [323416800000, 14.786779517],
  [326005200000, 15.147255922],
  [328683600000, 15.810582065],
  [331275600000, 14.178529783],
  [333954000000, 13.314194421],
  [336632400000, 13.136608244],
  [339224400000, 13.133051948],
  [341906400000, 12.91869716],
  [344498400000, 12.732242952],
  [347176800000, 12.062863603],
  [349855200000, 11.274926046],
  [352274400000, 10.363727852],
  [354952800000, 9.752589153],
  [357541200000, 9.645887355],
  [360219600000, 9.250210999],
  [362811600000, 11.274384726],
  [365490000000, 11.853018154],
  [368168400000, 12.262533118],
  [370760400000, 11.298313544],
  [373442400000, 10.554645194],
  [376034400000, 9.884984782],
  [378712800000, 9.499196473],
  [381391200000, 9.56769049],
  [383810400000, 8.920648287],
  [386488800000, 9.112202163],
  [389077200000, 9.08479885],
  [391755600000, 8.909836827],
  [394347600000, 7.912560428],
  [397026000000, 7.351467333],
  [399704400000, 6.003409335],
  [402296400000, 6.000904404],
  [404978400000, 5.327823771],
  [407570400000, 4.518985485],
  [410248800000, 4.695598354],
  [412927200000, 4.62783567],
  [415346400000, 4.855813143],
  [418024800000, 4.456933531],
  [420613200000, 3.549623729],
  [423291600000, 2.843739681],
  [425883600000, 2.630755198],
  [428562000000, 2.553400975],
  [431240400000, 2.944004571],
  [433832400000, 3.09331236],
  [436514400000, 3.751793567],
  [439106400000, 4.465480085],
  [441784800000, 4.485762548],
  [444463200000, 4.524563869],
  [446968800000, 4.65415841],
  [449647200000, 4.646319003],
  [452235600000, 4.708074066],
  [454914000000, 4.787485493],
  [457506000000, 4.897092721],
  [460184400000, 5.032939607],
  [462862800000, 5.140612141],
  [465454800000, 5.103857709],
  [468136800000, 4.968986894],
  [470728800000, 5.052939222],
  [473407200000, 4.726710471],
  [476085600000, 4.871701461],
  [478504800000, 4.962072036],
  [481183200000, 4.754134291],
  [483771600000, 5.037120921],
  [486450000000, 5.05654234],
  [489042000000, 4.948295318],
  [491720400000, 4.94547442],
  [494398800000, 4.7871651],
  [496990800000, 4.891950804],
  [499672800000, 5.149995169],
  [502264800000, 5.030732007],
  [504943200000, 5.296961132],
  [507621600000, 5.124947576],
  [510040800000, 5.229854261],
  [512719200000, 5.370857251],
  [515307600000, 5.040741681],
  [517986000000, 5.042080888],
  [520578000000, 4.975291061],
  [523256400000, 4.838260997],
  [525934800000, 4.962973389],
  [528526800000, 4.897657302],
  [531208800000, 4.591247998],
  [533800800000, 4.64519092],
  [536479200000, 4.481798225],
  [539157600000, 4.44093159],
  [541576800000, 4.263792189],
  [544255200000, 4.358079784],
  [546843600000, 4.416917659],
  [549522000000, 4.175391862],
  [552114000000, 4.166490008],
  [554792400000, 4.280898407],
  [557470800000, 4.291035748],
  [560062800000, 4.343067431],
  [562744800000, 4.314664296],
  [565336800000, 4.302583149],
  [568015200000, 4.383640423],
  [570693600000, 4.386553409],
  [573199200000, 4.451939222],
  [575877600000, 4.388452903],
  [578466000000, 4.445286952],
  [581144400000, 4.685384324],
  [583736400000, 4.712055892],
  [586414800000, 4.685749317],
  [589093200000, 4.73102913],
  [591685200000, 4.616281806],
  [594367200000, 4.751873732],
  [596959200000, 4.798725378],
  [599637600000, 4.756783262],
  [602316000000, 4.792426849],
  [604735200000, 4.760352769],
  [607413600000, 4.627130987],
  [610002000000, 4.751380664],
  [612680400000, 4.753801306],
  [615272400000, 4.905247602],
  [617950800000, 4.865522153],
  [620629200000, 4.684441734],
  [623221200000, 4.81739966],
  [625903200000, 4.811218772],
  [628495200000, 4.842735403],
  [631173600000, 4.92058886],
  [633852000000, 4.935526464],
  [636271200000, 5.208700881],
  [638949600000, 5.294133558],
  [641538000000, 5.183754067],
  [644216400000, 5.388456883],
  [646808400000, 5.535071884],
  [649486800000, 5.855903558],
  [652165200000, 5.948660349],
  [654757200000, 5.817450968],
  [657439200000, 5.70341926],
  [660031200000, 5.672549361],
  [662709600000, 5.839029006],
  [665388000000, 5.883436919],
  [667807200000, 5.496431415],
  [670485600000, 5.302381155],
  [673074000000, 5.248477287],
  [675752400000, 4.959978472],
  [678344400000, 4.735708693],
  [681022800000, 4.413788018],
  [683701200000, 4.465741661],
  [686293200000, 4.310597235],
  [688975200000, 4.370003221],
  [691567200000, 4.366592403],
  [694245600000, 4.069913371],
  [696924000000, 3.878184354],
  [699429600000, 3.990512759],
  [702108000000, 4.077543119],
  [704696400000, 3.937860894],
  [707374800000, 3.875841001],
  [709966800000, 3.785344226],
  [712645200000, 3.644349796],
  [715323600000, 3.363566041],
  [717915600000, 3.654950596],
  [720597600000, 3.649402976],
  [723189600000, 3.497528562],
  [725868000000, 3.547354737],
  [728546400000, 3.580667722],
  [730965600000, 3.353160609],
  [733644000000, 3.422176699],
  [736232400000, 3.551431283],
  [738910800000, 3.583428873],
  [741502800000, 3.437046316],
  [744181200000, 3.522739086],
  [746859600000, 3.656038681],
  [749451600000, 3.433321443],
  [752133600000, 3.445125507],
  [754725600000, 3.557822725],
  [757404000000, 3.384372964],
  [760082400000, 3.424654259],
  [762501600000, 3.578833286],
  [765180000000, 3.364064138],
  [767768400000, 3.238103819],
  [770446800000, 3.207540833],
  [773038800000, 3.245680943],
  [775717200000, 3.318864731],
  [778395600000, 3.267212367],
  [780987600000, 3.178740091],
  [783669600000, 3.142092625],
  [786261600000, 2.915659975],
  [788940000000, 3.159681044],
  [791618400000, 3.139699974],
  [794037600000, 3.184482491],
  [796716000000, 3.322916117],
  [799304400000, 3.367477772],
  [801982800000, 3.34707431],
  [804574800000, 3.402097044],
  [807253200000, 3.255560049],
  [809931600000, 3.368207809],
  [812523600000, 3.479287466],
  [815205600000, 3.394879542],
  [817797600000, 3.397750888],
  [820476000000, 3.294296705],
  [823154400000, 3.278044833],
  [825660000000, 3.15123296],
  [828338400000, 3.021419042],
  [830926800000, 3.065009249],
  [833605200000, 3.066510398],
  [836197200000, 3.103134864],
  [838875600000, 3.096243134],
  [841554000000, 3.076709572],
  [844146000000, 2.957328624],
  [846828000000, 2.99348831],
  [849420000000, 3.066760867],
  [852098400000, 2.924852958],
  [854776800000, 2.815492049],
  [857196000000, 2.868448161],
  [859874400000, 2.924881516],
  [862462800000, 2.883239208],
  [865141200000, 2.841507556],
  [867733200000, 2.764311367],
  [870411600000, 2.668660701],
  [873090000000, 2.558893145],
  [875682000000, 2.633884037],
  [878364000000, 2.564888202],
  [880956000000, 2.636585632],
  [883634400000, 2.686312997],
  [886312800000, 2.70235568],
  [888732000000, 2.682792941],
  [891410400000, 2.650550927],
  [893998800000, 2.621199946],
  [896677200000, 2.610692088],
  [899269200000, 2.613395599],
  [901947600000, 2.643666793],
  [904626000000, 2.603431515],
  [907218000000, 2.54435291],
  [909900000000, 2.531446927],
  [912492000000, 2.446189532],
  [915170400000, 2.3907588],
  [917848800000, 2.3238316],
  [920268000000, 2.2464619],
  [922946400000, 2.2358613],
  [925534800000, 2.1625267],
  [928213200000, 2.0812547],
  [930805200000, 2.1244533],
  [933483600000, 2.1074137],
  [936162000000, 2.0832919],
  [938754000000, 2.0639533],
  [941436000000, 2.1623251],
  [944028000000, 2.1818508],
  [946706400000, 2.350195],
  [949384800000, 2.3950909],
  [951890400000, 2.4989589],
  [954568800000, 2.4247194],
  [957157200000, 2.5736327],
  [959835600000, 2.7153642],
  [962427600000, 2.7240005],
  [965106000000, 2.8853852],
  [967784400000, 2.908796],
  [970376400000, 2.9310365],
  [973058400000, 2.8816134],
  [975650400000, 2.9838403],
  [978328800000, 2.8896431],
  [981007200000, 2.9893325],
  [983426400000, 2.9711853],
  [986104800000, 3.1007641],
  [988693200000, 3.0843327],
  [991371600000, 3.2118098],
  [993963600000, 3.2190557],
  [996642000000, 3.2635089],
  [999320400000, 3.3990087],
  [1001912400000, 3.4934371],
  [1004594400000, 3.6122717],
  [1007186400000, 3.5754587],
  [1009864800000, 3.5684398],
  [1012543200000, 3.5387817],
  [1014962400000, 3.480145],
  [1017640800000, 3.4775061],
  [1020229200000, 3.4632677],
  [1022907600000, 3.2512149],
  [1025499600000, 3.2740984],
  [1028178000000, 3.1567969],
  [1030856400000, 3.0374651],
  [1033448400000, 2.9477485],
  [1036130400000, 2.8341831],
  [1038722400000, 2.8018315],
  [1041400800000, 2.7875531],
  [1044079200000, 2.7046594],
  [1046498400000, 2.6277872],
  [1049176800000, 2.4593491],
  [1051765200000, 2.3483407],
  [1054443600000, 2.27155],
  [1057035600000, 2.237208],
  [1059714000000, 2.1655338],
  [1062392400000, 2.1842475],
  [1064984400000, 2.1611133],
  [1067666400000, 2.0365931],
  [1070258400000, 1.976213],
  [1072936800000, 1.9607229],
  [1075615200000, 2.0481367],
  [1078120800000, 2.1370611],
  [1080799200000, 2.2577613],
  [1083387600000, 2.2378638],
  [1086066000000, 2.3794884],
  [1088658000000, 2.2638524],
  [1091336400000, 2.2577292],
  [1094014800000, 2.240201],
  [1096606800000, 2.2372194],
  [1099288800000, 2.3012131],
  [1101880800000, 2.3138859],
  [1104559200000, 2.3158903],
  [1107237600000, 2.2862449],
  [1109656800000, 2.2461526],
  [1112335200000, 2.2397223],
  [1114923600000, 2.3579552],
  [1117602000000, 2.1993552],
  [1120194000000, 2.3010794],
  [1122872400000, 2.2644059],
  [1125550800000, 2.3340762],
  [1128142800000, 2.3253024],
  [1130824800000, 2.4316658],
  [1133416800000, 2.4690335],
  [1136095200000, 2.4510191],
  [1138773600000, 2.4992554],
  [1141192800000, 2.581219],
  [1143871200000, 2.6806926],
  [1146459600000, 2.7839595],
  [1149138000000, 3.0344298],
  [1151730000000, 3.0939988],
  [1154408400000, 3.2251144],
  [1157086800000, 3.212012],
  [1159678800000, 3.2911246],
  [1162360800000, 3.1482614],
  [1164952800000, 3.1241583],
  [1167631200000, 3.1457342],
  [1170309600000, 3.161558],
  [1172728800000, 3.1090014],
  [1175403600000, 2.9667028],
  [1177995600000, 2.783324],
  [1180674000000, 2.6305791],
  [1183266000000, 2.5346411],
  [1185944400000, 2.4685402],
  [1188622800000, 2.4838823],
  [1191214800000, 2.5033248],
  [1193893200000, 2.6563697],
  [1196488800000, 2.7127336],
  [1199167200000, 2.7470404],
  [1201845600000, 2.6165653],
  [1204351200000, 2.6887664],
  [1207026000000, 2.7251103],
  [1209618000000, 2.7937419],
  [1212296400000, 2.9376962],
  [1214888400000, 3.0142542],
  [1217566800000, 3.0845059],
  [1220245200000, 3.0766785],
  [1222837200000, 2.9291949],
  [1225515600000, 2.7864624],
  [1228111200000, 2.6304305],
  [1230789600000, 2.5522481],
  [1233468000000, 2.5594949],
  [1235887200000, 2.4535819],
  [1238562000000, 2.3761457],
  [1241154000000, 2.2888288],
  [1243832400000, 2.0898948],
  [1246424400000, 1.9228669],
  [1249102800000, 1.7701932],
  [1251781200000, 1.6158958],
  [1254373200000, 1.5209969],
  [1257051600000, 1.3714917],
  [1259647200000, 1.3248615],
  [1262325600000, 1.1770019],
  [1265004000000, 1.0548474],
  [1267423200000, 0.93183853],
  [1270098000000, 0.87602978],
  [1272690000000, 0.7998678],
  [1275368400000, 0.78483473],
  [1277960400000, 0.74959322],
  [1280638800000, 0.69562861],
  [1283317200000, 0.6676136],
  [1285909200000, 0.67526624],
  [1288587600000, 0.82600201],
  [1291183200000, 0.83710132],
  [1293861600000, 0.96003713],
  [1296540000000, 1.1238816],
  [1298959200000, 1.1861014],
  [1301634000000, 1.21555],
  [1304226000000, 1.2613949],
  [1306904400000, 1.2990532],
  [1309496400000, 1.4236275],
  [1312174800000, 1.6569751],
  [1314853200000, 1.7268145],
  [1317445200000, 1.8413647],
  [1320123600000, 1.8407168],
  [1322719200000, 2.0478499],
  [1325397600000, 2.1159285],
  [1328076000000, 2.0181912],
  [1330581600000, 2.1247577],
  [1333256400000, 2.1937928],
  [1335848400000, 2.1896843],
  [1338526800000, 2.2407468],
  [1341118800000, 2.2616531],
  [1343797200000, 2.1718632],
  [1346475600000, 2.2199385],
  [1349067600000, 2.2070705],
  [1351746000000, 2.1959869],
  [1354341600000, 2.1097305],
  [1357020000000, 2.0682971],
  [1359698400000, 2.146017],
  [1362117600000, 2.0999025],
  [1364792400000, 1.9354319],
  [1367384400000, 1.907797],
  [1370062800000, 1.8766189],
  [1372654800000, 1.867879],
  [1375333200000, 1.9142202],
  [1378011600000, 1.8904211],
  [1380603600000, 1.8687356],
  [1383282000000, 1.8930866],
  [1385877600000, 1.8711904],
  [1388556000000, 1.8218145],
  [1391234400000, 1.7891863],
  [1393653600000, 1.8208567],
  [1396328400000, 2.0251612],
  [1398920400000, 2.1282345],
  [1401598800000, 2.1433409],
  [1404190800000, 2.1008094],
  [1406869200000, 1.9625042],
  [1409547600000, 1.954047],
  [1412139600000, 2.0060187],
  [1414818000000, 2.0043657],
  [1417413600000, 1.9711259],
  [1420092000000, 1.985653],
  [1422770400000, 1.9819969],
  [1425189600000, 1.9991371],
  [1427864400000, 2.0631236],
  [1430456400000, 2.0668869],
  [1433134800000, 2.1147326],
  [1435726800000, 2.1414477],
  [1438405200000, 2.1802398],
  [1441083600000, 2.279431],
  [1443675600000, 2.3462109],
  [1446354000000, 2.4052606],
  [1448949600000, 2.4436874],
  [1451628000000, 2.4667222],
  [1454306400000, 2.5442092],
  [1456812000000, 2.531878],
  [1459486800000, 2.537996],
  [1462078800000, 2.5711572],
  [1464757200000, 2.5689022],
  [1467349200000, 2.5758512],
  [1470027600000, 2.7228064],
  [1472706000000, 2.6321032],
  [1475298000000, 2.5095184],
  [1477976400000, 2.5258013],
  [1480572000000, 2.594944],
  [1483250400000, 2.661562],
  [1485928800000, 2.67446],
  [1488348000000, 2.453344],
  [1491022800000, 2.25217],
  [1493614800000, 2.155911],
  [1496293200000, 2.13853],
  [1498885200000, 2.146769],
  [1501563600000, 2.089832],
  [1504242000000, 2.106697],
  [1506834000000, 2.192819],
  [1509512400000, 2.115031],
  [1512108000000, 2.125472],
  [1514786400000, 2.166829],
  [1517464800000, 2.129934],
  [1519884000000, 2.359611],
  [1522558800000, 2.492147],
  [1525150800000, 2.544964],
  [1527829200000, 2.558656],
  [1530421200000, 2.531541],
  [1533099600000, 2.430733],
  [1535778000000, 2.475069],
  [1538370000000, 2.419846],
  [1541048400000, 2.472599],
  [1543644000000, 2.448984],
  [1546322400000, 2.378344],
  [1549000800000, 2.373979],
  [1551420000000, 2.393918],
  [1554094800000, 2.410959],
  [1556686800000, 2.39962],
  [1559365200000, 2.431727],
  [1561957200000, 2.467932],
  [1564635600000, 2.633395],
  [1567314000000, 2.616559],
  [1569906000000, 2.7342],
  [1572584400000, 2.760463],
  [1575180000000, 2.724503],
  [1577858400000, 2.788599],
  [1580536800000, 2.812655],
  [1583042400000, 2.641068],
  [1585717200000, 2.233555],
  [1588309200000, 2.085757],
  [1590987600000, 2.064379],
  [1593579600000, 2.350691],
  [1596258000000, 2.297196],
  [1598936400000, 2.088195],
  [1601528400000, 1.848308],
  [1604206800000, 1.786708],
  [1606802400000, 1.694452],
  [1609480800000, 1.504532],
  [1612159200000, 1.520784],
  [1614578400000, 1.694673],
  [1617253200000, 2.284027],
  [1619845200000, 2.623896],
  [1622523600000, 2.604632],
  [1625115600000, 2.325734],
  [1627794000000, 2.353165],
  [1630472400000, 2.649506],
  [1633064400000, 3.04294],
  [1635742800000, 3.205069],
  [1638338400000, 3.467011],
  [1641016800000, 3.982987642],
  [1643695200000, 4.297857761],
  [1646114400000, 4.551814556],
  [1648789200000, 4.723537922],
  [1651381200000, 4.975575447],
  [1654059600000, 5.425963402],
  [1656651600000, 5.629465103],
  [1659330000000, 5.990544319],
  [1662008400000, 6.393735409],
  [1664600400000, 6.367826462],
  [1667278800000, 6.475764355],
  [1669874400000, 6.606693265],
];
