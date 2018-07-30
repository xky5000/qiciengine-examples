// define a user behaviour
var genTestCase = qc.defineBehaviour('qc.engine.genTestCase', qc.Behaviour, function() {
    // need this behaviour be scheduled in editor
    //this.runInEditor = true;
}, {
    // fields need to be serialized
    txt : qc.Serializer.NODE,
    ballTexture : qc.Serializer.TEXTURE
});

// Called when the script instance is being loaded.
genTestCase.prototype.awake = function() {
    // 初始化工作
    this.demoIndex = 0;
    this.isOk = true;

    // 随机生成的数列，让所有机器的测试用例一致
    this.randomIndex = -1;
    this.randomList = [0.8997756514301241,0.2173304428652334,0.5376221152514917,0.557648652811626,0.9338434618413283,0.7520963138754693,0.5714960822070059,0.5719967190557256,0.5684615677520812,0.7251454812379785,0.38715185114523165,0.7223990427439506,0.21130949989129477,0.6241580446447461,0.8538345579626176,0.8173610689810704,0.33547603370646306,0.5384093459789308,0.14610562118061554,0.5573763279608761,0.6385771489487198,0.5535908540744059,0.5384239778640656,0.41199747494437866,0.5713622451611704,0.9588914649724019,0.8027860195511052,0.22356755495640424,0.7535601567540411,0.4586977659033131,0.4467404844543572,0.7259326793304803,0.4539249408423982,0.023524822588750993,0.17388169238521023,0.6473151611413124,0.8055518580466119,0.7890823376670242,0.24468032921083283,0.46659195530316455,0.8506223431472635,0.4018052623068329,0.9250771769747999,0.47175380571606307,0.3675553280899677,0.165565264714566,0.3398602666848545,0.267828372942442,0.7459519875187499,0.7168040823132185,0.7868830288733355,0.6516257028712766,0.6492432218926345,0.7237895940046244,0.45643379004126095,0.90963252888885,0.6772184917494981,0.028406686949256077,0.8844309043930143,0.40630481108598837,0.1753235843284937,0.6967860244927253,0.43946679923732046,0.6552687375158914,0.9445400245790267,0.8585026688412147,0.9287144582990345,0.41527082035162044,0.016401748934423477,0.5037260980323,0.6390584385770133,0.34982062845419737,0.3317273765232964,0.09141087969463091,0.6915124281383767,0.6288464534075218,0.47946564550393345,0.42999796615952657,0.5805451367754337,0.5248001406905671,0.42238420846186786,0.5365357951578396,0.6485569955604353,0.46143706052341926,0.46970117492570274,0.36250758897726376,0.9023433973302484,0.4950041458443317,0.564179067311845,0.3184318373786217,0.842270039774097,0.40236272088031866,0.644282947079746,0.38995896099620775,0.9112807976369264,0.4030248927532547,0.919832935956636,0.34980951213731526,0.45654964307531554,0.24511849447774092,0.7857531165935019,0.5162651361861685,0.8439843260724114,0.2875935530387268,0.30480902158554435,0.5605171633374408,0.9557820118145874,0.6844403411289657,0.3527042848743227,0.001536276244812118,0.6427104627626139,0.35885035432490664,0.8460186012343363,0.27736019951237445,0.8393507525798181,0.5784117744210102,0.1530882187413447,0.21820381287283963,0.11138192245305811,0.6394476346638844,0.268962866655694,0.102549619213395,0.8911528111997591,0.23253128234038645,0.751468458893358,0.21479667736392116,0.8071595152307567,0.469256168717326,0.9102542512167786,0.46812013763838833,0.40301677046785045,0.8046915579942511,0.10570760016889591,0.9908074077979492,0.266174130982588,0.3478888260141937,0.5204703010776097,0.18140709748286388,0.9824115755798033,0.7826945630888102,0.37037272647663166,0.47279222229282536,0.7391513651545527,0.88572886779133,0.3422327787540651,0.7228397110320819,0.26536522135541474,0.526769629108965,0.45867790921466733,0.08684228977299857,0.31513954596718263,0.16669477109640796,0.2191770912899038,0.41060258329908783,0.8737570008790643,0.6030175268625775,0.8106936070526409,0.07598596018619852,0.37192369528680636,0.8825529252375852,0.6777457785240346,0.3163460286294073,0.5057817400126201,0.3700951738072702,0.6050814036327696,0.9279928818021295,0.7797157731467512,0.347902448606213,0.5266348577594613,0.9746283455138085,0.11653933178694142,0.29303890843552316,0.9778621459149506,0.24470747735622234,0.4895434513378687,0.34017287908919336,0.9437389363241768,0.05853949636257916,0.11359363345221629,0.9119211533246225,0.508261132454553,0.5384716899585802,0.5554093920076211,0.9739716373440948,0.8168312762929235,0.07769872521278565,0.9027175300384287,0.9813426071439177,0.5646018979181082,0.03129533066105705,0.47047613832840995,0.08112240968665918,0.3982527599078427,0.16110202510968152,0.28401797139624585,0.830450756525126,0.823365716663383,0.8395309329032103,0.2192961254370227,0.49774683674353204,0.04980625519991899,0.33979735912549414,0.434170954672753,0.35962890415204285,0.7545593481177475,0.48135803911927155,0.053673591815222244,0.535296951058039,0.7774854790410166,0.37168045919846615,0.9245042775454697,0.02050841953502336,0.03586649289423516,0.9355482453532695,0.835778065936486,0.38024191246160344,0.21137596422280103,0.9289397876795527,0.6313360982872156,0.46375095963640334,0.3823274551916189,0.9377370688612261,0.43499264599022847,0.724301918709694,0.340558052762314,0.4957001985395255,0.15842374670708925,0.329610872130353,0.4053774939337895,0.7321343949832837,0.8665028259291434,0.9443494627330524,0.5708551301672553,0.04562890372244843,0.885036693995215,0.6370380428525975,0.1375278309510315,0.10553857263027133,0.7819690335499243,0.5349389403905702,0.06720328378754692,0.3397202785300262,0.2690740551125139,0.1710844608883848,0.6287719711745783,0.9468006684909722,0.45800770164560234,0.6818077441609713,0.2897234456004456,0.27115230607905105,0.5366247344856623,0.8094273370327794,0.6194400559130664,0.43872997731441576,0.13685637158910913,0.8750736997605897,0.024209816861479494,0.8987061471378672,0.019552175557770335,0.6877771101118193,0.1428324055782464,0.8676193328276207,0.6697337042331506,0.293256181097167,0.20925639919925465,0.052551102207062605,0.7992809523207476,0.4214402373321233,0.20906578096000672,0.8279661434669976,0.8492493247698174,0.7217364073319765,0.06429374436789015,0.6731406034374234,0.6071933291799636,0.5282151419502845,0.7651056083730401,0.9470515172256027,0.13980203395445523,0.6514916277484044,0.9677624930646849,0.43456257181649915,0.40713593643842727,0.9094990172767301,0.26613761666208724,0.1195985784569531,0.99385930897038,0.2874283672970632,0.19589008986010348,0.747027959228131,0.8669437316900315,0.9057552475748376,0.1398951305588776,0.5685877563439126,0.09787543708477564,0.7959128643357294,0.087206560688456,0.2995676450235141,0.32270728759376177,0.5395891682389795,0.13991563261361906,0.5894318186468177,0.3004383506888355,0.2309376122940745,0.38122080461847596,0.049451425060998755,0.5476709383154423,0.12997217931711957,0.27014854604767,0.44445867892533775,0.912852624509437,0.848150156882681,0.8083509656622676,0.1338150161861873,0.7114389786044903,0.31080081998348263,0.2783613358542101,0.18922043396033827,0.2948908546685982,0.027995549729581626,0.019903231927691944,0.30974859144497335,0.7337589035172161,0.9257403774957567,0.5029284209983869,0.40945684729615195,0.2870733267936496,0.9587584285615327,0.25086633701821426,0.6827980787009456,0.5504573740378704,0.30051470234759736,0.3880812624636596,0.06454865968913293,0.9701769092200236,0.5647595034962858,0.3190547200843721,0.27845601654161634,0.9237248529042308,0.17941807807655952,0.9415314533876966,0.704204691793634,0.9760221513704994,0.24888414444342355,0.05383151333006819,0.2771105732182588,0.697328610045032,0.32694288752810263,0.9033840553655113,0.7923355580960394,0.04079208917591837,0.5713214453644044,0.25667783547147494,0.059694533258506155,0.0032011050699414234,0.9214104989499956,0.25645288919508635,0.8460745646076178,0.3287982456203691,0.383846804513285,0.4475524378013176,0.6740567034151581,0.2856792512350752,0.6776326827839769,0.6225743674692927,0.994816508236285,0.02481612060360372,0.2511615013387738,0.054988013731726904,0.16183524083012313,0.04108098955812456,0.30784475311523707,0.5732156417795018,0.22853795352029405,0.7273575241800925,0.5644997240661007,0.07253532178455724,0.48514175190498476,0.027435406108723637,0.6348318716714991,0.33209784230073036,0.8973088686566526,0.6981351507576705,0.1965458591645297,0.6364188229070646,0.748594111053454,0.07604648650661461,0.6409305447837397,0.9017741235634296,0.919005643118394,0.1457166510748895,0.4637570924759833,0.15533327789932438,0.24376912596665168,0.11421876139296772,0.985244441417551,0.4696376875304189,0.1423866845009767,0.1872446917636894,0.06463441972771844,0.8211270472016896,0.6414753288507811,0.7082296805016124,0.40092272040640986,0.6096182369226428,0.6538480213636171,0.8523546429334932,0.9218212988644432,0.11145782120706627,0.680250181665645,0.4710340146951906,0.6739616161373445,0.6247543442186099,0.6788433893999812,0.2711458200917798,0.6623343483448167,0.3786159850607076,0.9400220924028853,0.44458035388164374,0.6624131408574427,0.9205035868172937,0.32378004916020986,0.18093319992697587,0.9996602765389733,0.12682962226751515,0.714068862997792,0.5656430033722311,0.6727774797577846,0.5790351276310235,0.9421445165070992,0.5301883245901615,0.6237760820202978,0.07965452718436472,0.4173352765558638,0.9292005542416091,0.49140520651235686,0.36413657012052014,0.5189790310791536,0.2354279783526716,0.12397422260804847,0.8533866892203266,0.32203312356757596,0.875003497448162,0.6634083641039832,0.11460733920121569,0.24853495979845208,0.08688924505118556,0.5584846940769799,0.7727242084713475,0.5210733222418618,0.2545762101358009,0.3751894846846846,0.09137699281592737,0.22046230964791858,0.8656791394913868,0.5180841728466257,0.5884163936281905,0.19880097412554454,0.06518414460696076,0.16164168452214334,0.4738442549209818,0.5894499273572027,0.19286940230674676,0.2299109899418219,0.09418635005432119,0.5397801518795293,0.3216924404875732,0.7415785535843054,0.14312189511727813,0.09082126600907547,0.2871733349450525,0.20787097730697024,0.18952027771434166,0.17581464365336896,0.6498886147232918,0.10493418275457156,0.5175449004482273,0.6947653101352116,0.5331964972903085,0.9495295285568228,0.8856816946226371,0.9466989174506073,0.6231108494416593,0.8097214850556547,0.5224330201619389,0.5978309795456891,0.0143869670314003,0.6757952888423868,0.8100533483966059,0.9849378492250662,0.1619875740201584,0.7299325587340455,0.8545388996228171,0.22993506853982693,0.4781221496631325,0.16565134620451283,0.4896109708823073,0.5513486542757107,0.5913459975928472,0.8138164367928127,0.06824962734041495,0.39219292957807106,0.7185850679900703,0.07112351084948032,0.8700881496340462,0.038827569269301865,0.02903903076424097,0.733320977937558,0.5967561287637619,0.09959093704861877,0.7088053653342397,0.7830819888607612,0.3656047996243923,0.26270490762552656,0.5252253754870562,0.7817639917613655,0.03167736329412629,0.6438948444946659,0.4559013107410994,0.4727371339360755,0.6547376536458189,0.6821187116002734,0.5434272323735501,0.3783573428338174,0.8261512996011489,0.8745309699698691,0.3944923937453353,0.033901453213851074,0.575040205546425,0.5244762046337572,0.06857127501575366,0.9494150352933366,0.2820186826717366,0.12496150997867095,0.6352842284301619,0.6385928616559959,0.7279064911577158,0.5238599160672688,0.5851595387404158,0.622351733181653,0.0027752451615841167,0.6698914559775708,0.3608430938959015,0.358486945282843,0.24199346500877184,0.44390894722359686,0.0119672887276705,0.39627799617894977,0.5573128227211555,0.8870100815723978,0.49673185707179224,0.7575690333055025,0.9087563554011504,0.8140098402570242,0.7164273923641098,0.3199022909794169,0.18779166988239626,0.7960355173247222,0.07008741201253854,0.37473143416186017,0.7375292677103782,0.2823550480499142,0.05755062158385216,0.5673269213827383,0.9988980440708541,0.25645484926756135,0.13352947814646843,0.9534736931846413,0.5141756425151893,0.5554008999941353,0.07944967822676818,0.9813553413299434,0.7707099070361496,0.011370848384004706,0.9628977798340834,0.4371325414958307,0.43210312418880625,0.4424594642178683,0.34736214466598914,0.8918837164815434,0.4168736199112941,0.3752206651834262,0.3381532263437079,0.9064854912245541,0.6435414755463726,0.19635445525479467,0.903335177079752,0.17178507165547652,0.4561314065395603,0.6726332753741078,0.7935093489948379,0.7257760580710435,0.803059133273589,0.7525563691135722,0.20631927987155585,0.061535892004505044,0.9331722096336958,0.27604833790052563,0.7136915015707064,0.6426195384684932,0.6719225680492449,0.5688820105360992,0.764488213121638,0.5300117239136413,0.8350227832083958,0.23592115876150133,0.7167882284887805,0.6185148708933561,0.4335469282828275,0.13598481619913838,0.9164465913016078,0.09230130106664891,0.4833365241905192,0.9166879176424685,0.05229600896364861,0.6668389648254014,0.276950282467217,0.029030239010415793,0.34131071871472995,0.2224125414750986,0.5682154043111785,0.7117610176659634,0.450287751564018,0.4212612557724533,0.3956178330647311,0.5054798769427595,0.20696069721701038,0.16905865966583522,0.3620901664519125,0.8906170253172903,0.0052430185389105155,0.9790927648793224,0.35849233719118323,0.7460255430139608,0.20861379660313695,0.5644941069207405,0.734389099407007,0.9037703162576032,0.8201359174868574,0.8739994131550461,0.3403753782640151,0.9316649597639524,0.22152167484788543,0.6463270166036634,0.9234126581353688,0.2692507416650751,0.010803539775685378,0.8961160319554458,0.5424952122581963,0.5282697720693981,0.3017638793694062,0.827453580636575,0.1781288851088092,0.07401098785887039,0.2778331617467955,0.8795305793724866,0.11129320747855309,0.7619954560300959,0.5659468764061142,0.025240280136116233,0.9279412724443648,0.7298631316229769,0.7488396538556799,0.7932217277070819,0.12022360730341197,0.4327732264614925,0.7184614325300633,0.8330721947354645,0.7966377289270326,0.9973806142450641,0.549714283968737,0.5629492124822015,0.3699182231901772,0.0655219354832397,0.10079376859860179,0.22390156521300209,0.7087202396520325,0.94383910271941,0.8179570800808511,0.642792419039836,0.014748226106546358,0.746124987656797,0.695407312762998,0.02956622598973868,0.9197697306156241,0.4307820884933484,0.7929499238150182,0.3101588024879707,0.45787112509700845,0.5252797167531447,0.48973922670121817,0.30994504325108707,0.9062899672820794,0.5715370849131354,0.36644031410925937,0.4947657209420031,0.019789166551356763,0.8215123090526024,0.3732789267858261,0.09184937284137762,0.1718093625642576,0.7148543528506996,0.17010790311102375,0.25111092339633423,0.5623725053818378,0.43992035383042793,0.3837142796869162,0.33625614675373994,0.7883895000457259,0.4769248494584237,0.17549135410016192,0.5248333548596067,0.029315391445060346,0.3006894714626862,0.5950857617618761,0.41265677404250845,0.031130204200366052,0.6423482598589685,0.7433033306172845,0.866244797873803,0.3628548501651905,0.4507458170335994,0.923548512869719,0.5018447248839828,0.1243326013130217,0.20150196200756754,0.6561863885965808,0.4024610107928699,0.1096770775050191,0.34425881495749366,0.2367337808933141,0.1353521996571183,0.7716093566908444,0.1708430193117736,0.7307300860618708,0.9459584920588298,0.06151523572948325,0.006107066147928775,0.7210802805161325,0.5105697118428905,0.013007733211026551,0.36847711060455346,0.6527499196058166,0.2752755114490306,0.46092790767969327,0.8287413207899053,0.9489886595682611,0.028420646721275533,0.19546753919330584,0.8407286060923271,0.19963362855722244,0.6310314866176143,0.1856793719944272,0.2669064778045831,0.5468759451943985,0.07073450845883156,0.44811946679251435,0.19347837385493372,0.06674628531552496,0.11616909408615439,0.3750839074619592,0.24512735859694312,0.4791100707898559,0.9126949338355379,0.990291600879025,0.021188451527436758,0.9691377241136196,0.3359704605703022,0.8826601512928962,0.05696443112398675,0.1721499702749374,0.9487079891089418,0.39436603349281607,0.9932790006920693,0.5386258946320202,0.4415293100494275,0.3963646852652487,0.4060730785684441,0.0885689504031304,0.8169178972692039,0.016258264508866915,0.14411183162059027,0.3577928323662112,0.31380863606648357,0.2569167430012358,0.2900838659001108,0.6665621165188327,0.23106763228368843,0.7173226063124154,0.13150760085159519,0.5792392429154045,0.1582724760665768,0.5294536041528362,0.1450710665728312,0.3608824338451708,0.9126868706408646,0.19685311662450822,0.49739804739432714,0.6530616230826558,0.39377000085233793,0.8512772088076581,0.6461939789911724,0.7203800629119188,0.08591869138099306,0.3517562672159329,0.9907878605496054,0.1874808690872054,0.8605637458359163,0.17691849019476424,0.27006450410532756,0.6754164428198652,0.6359983364158228,0.7342171791705119,0.8531159134588024,0.48157593906376883,0.6179939366671259,0.6036620195067055,0.3671309551676212,0.7159467733482596,0.2271831757549876,0.1847781940540687,0.3346197758412446,0.535223286871304,0.09844056163945014,0.1741764762339182,0.3431322187102621,0.8589357563686326,0.5823688778453378,0.08483402425869802,0.7345332052010698,0.780184249010331,0.9043527647967242,0.3266812378765278,0.7764501638055619,0.16174148441975333,0.32814028809984497,0.11453029206116949,0.5316038083484294,0.6639272088516435,0.10281078379995989,0.5343231860551882,0.788714453837817,0.49677099874101294,0.32996799352998374,0.0025030393030047726,0.5213823105082382,0.47132129670499157,0.28361739943727504,0.2863358850369484,0.3198648459070985,0.5530842718851467,0.5520225291807968,0.903200419933859,0.9999379575182683,0.8276690779908931,0.37297241946002413,0.07628102637617573,0.14044631930696494,0.17075929813795176,0.43944727138773243,0.3316215430131739,0.7112763766889751,0.7582780906276156,0.7292655018239385,0.2903491222035195,0.4772546500580306,0.20411654720082328,0.403466619045624,0.03031333498322053,0.31224527045664563,0.9677601691927065,0.4583042158305486,0.7127567071163499,0.288411616182781,0.15227047905340108,0.8510952083461651,0.08473473776411589,0.049596624775005704,0.44515657699500677,0.8648833342807969,0.40258317805000243,0.28839207177062165,0.44648919205857807,0.23862989758826525,0.9811641111975418,0.09040765434674336,0.04843634812402331,0.8298678745164585,0.35183963958562425,0.8175706298846932,0.26495393756585295,0.967990025217166,0.9283613476465293,0.3317386355680423,0.5220771238589459,0.8677783687428982,0.30929037958191086,0.7645716038500581,0.20562691600145677,0.9277947696431146,0.14250674972400157,0.820020176103085,0.9205866902484687,0.9146693574131433,0.8760166058200654,0.763954524453115,0.9604938239038665,0.250937901372033,0.603195876370278,0.5368976052903678,0.19320896335424398,0.2369764704992141,0.3025384853872948,0.7297554046907171,0.15021684193998208,0.4690339179495966,0.05561615970595413,0.7758731305264575,0.5891611673518637,0.29909840372172725,0.2905043216976293,0.7592558130012299,0.09598028687676563,0.9516437465262277,0.8698807910885367,0.3167131454707599,0.3567606682531723,0.3885955997621233,0.42021266638709465,0.6133994121996065,0.621292925086175,0.2662687547684346,0.3264002020070922,0.26872259701655654,0.15440988048850346,0.36949370687191996,0.28452376884440134,0.52212063553979,0.9013892073390912,0.2914443895311942,0.13221287572795637,0.13562841530816483,0.025110193302861017,0.23067769822582385,0.15599370858909523,0.8219477242521496,0.9750948887827293,0.9326851653374595,0.23407351240245444,0.5637055144611745,0.2916982522023055,0.6506143612767439,0.13783567598264512,0.7057881964275527,0.25942758150156586,0.09377449314716446,0.5975019304425919,0.16746355307730232,0.09943531060141853,0.07467088539054023,0.28934579414130623,0.9820373725867229,0.148202441333519,0.8733451038629738,0.5314230450416964,0.8970635686350332,0.9883999049531706,0.46325938998330884,0.06420592732589259,0.014488344971761657,0.8149382528956997,0.7222893388491205,0.34216805647469717,0.7209577222423373,0.05124699171015723,0.6176733935715737,0.869350020109354,0.23867351568306683,0.3076845253524545,0.8821864061438569,0.48439371418347643,0.7941807189934098,0.29934268654869056,0.28056952981713645,0.6982997417083296,0.7051013317972108,0.3419218201224419,0.5736331176787421,0.09756836816136594,0.9148741312418871,0.13481656810356224,0.5216332882398516,0.03875125106415678,0.17371941447817663,0.10987217294310758,0.876742483759237,0.9117392979885084,0.6696840679532481,0.41015024100840325,0.3597585801976042];
};

// 获取下一个随机数
genTestCase.prototype.random = function() {
    this.randomIndex++;
    if (this.randomIndex >= this.randomList.length)
        this.randomIndex = 0;
    return this.randomList[this.randomIndex];
};

// 点击进入下一组用例
genTestCase.prototype.onClick = function() {
    if (!this.isOk) return;

    this.demoIndex++;
    this.txt.text = 'Test Case:' + this.demoIndex;
    this.newInstance();
};

// 清除场景
genTestCase.prototype.clearStage = function() {
    var children = this.gameObject.children;

    for (var i = 0, len = children.length; i < len; i++) {
        var node = children[i];
        if (node.name === 'Platform') continue;
        node.destroyImmediately();
    }
};

// 创建球体
genTestCase.prototype.createBalls = function() {
    var self = this;
    var x = self.random();
    var num = Math.floor(16 * x);

    self.ball = null;
    for (var i = 0; i < num; i++)
        self._createBall();

    // 赋予这组当中的第一个创建的球速度，让它进行撞击状态
    var ball = self.ball;
    ball.body.onBodyCreated.addOnce(function() {
        if (!ball) return;
        ball.body.linearVelocity = new qc.Point(self.random() * 400, self.random() * 400);
    });
};

// 生成一粒球
genTestCase.prototype._createBall = function() {
    var self = this;
    var ball = this.game.add.image(this.gameObject);
    ball.x = 80 + self.random() * 480;
    ball.y = 80 + self.random() * 800;
    ball.pivotX = 0.5;
    ball.pivotY = 0.5;
    ball.width = ball.height = 40 + self.random() * 80;
    ball.texture = this.ballTexture;
    ball.name = 'ball';

    // 加一个物理
    ball.addScript('qc.Box2D.Body');
    ball._body.fixture[0].type = qc.Box2D.FIXTURE_TYPE.CIRCLE;
    ball.body.linearDamping = 0.5;
    ball.body.angularDamping = 0.5;
    ball.body.type = qc.Box2D.BODY_TYPE.DYNAMIC;

    if (!self.ball) self.ball = ball;
};

// 一组新的测试用例开始
genTestCase.prototype.newInstance = function() {
    var self = this;

    // 禁止点击
    self.isOk = false;

    self.clearStage();
    self.createBalls();

    // 短期不让点击，避免过快跳过，0.5 秒后允许
    setTimeout(function() {
        self.isOk = true;
    }, 500);
};
