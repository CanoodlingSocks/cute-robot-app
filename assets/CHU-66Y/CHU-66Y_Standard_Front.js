import * as React from "react";
import { G, Path, Svg, Defs, Text, TSpan, Filter, feDropShadow} from "react-native-svg";
import { StyleSheet } from 'react-native';

const CHUBBY_Front = () => {
    return (
        <Svg stroke-miterlimit="10" style={styles.image} version="1.1" viewBox="0 0 2160 1620">
{/* <Defs>
<Filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="112.565" id="Filter" width="86.8846" x="964.659" y="341.217">
<feDropShadow dx="0" dy="0" flood-color="#14b2d0" flood-opacity="1" in="SourceGraphic" result="Shadow" stdDeviation="3.7671"/>
</Filter>
<Filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="112.565" id="Filter_2" width="86.8846" x="1137.33" y="339.595">
<feDropShadow dx="0" dy="0" flood-color="#14b2d0" flood-opacity="1" in="SourceGraphic" result="Shadow" stdDeviation="3.7671"/>
</Filter>
<Filter color-interpolation-filters="sRGB" filterUnits="userSpaceOnUse" height="64.1985" id="Filter_3" width="118.156" x="1038.86" y="456.937">
<feDropShadow dx="0" dy="0" flood-color="#14b2d0" flood-opacity="1" in="SourceGraphic" result="Shadow" stdDeviation="3.7671"/>
</Filter>
</Defs> */}
<G id="Body">
<Path d="M895.081 450.764L1093.21 447.141L1307.43 450.764L1307.43 481.988L1098.18 494.044L895.081 481.988L895.081 450.764Z" fill="#9f9d9d" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M796.618 447.324L1407.12 447.324L1407.12 507.41L796.618 507.41L796.618 447.324Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M827.84 460.037L857.614 463.012L892.844 453.934L1351.81 458.451L1372.79 465.121L1406.42 453.685" fill="none" opacity="1" stroke="#ff0000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M827.84 478.522L865.526 481.248L899.205 474.001L1350.84 482.578C1350.84 482.578 1372.03 479.294 1375.23 475.354C1378.44 471.414 1400.81 481.583 1406.42 482.119" fill="none" opacity="1" stroke="#007cff" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M827.84 501.691L874.415 494.044L933.501 509.143L1350.84 496.001L1406.42 498.518" fill="none" opacity="1" stroke="#f4ba1f" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M825.747 468.93L1407.12 468.93" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M825.1 489.625L1407.12 489.862" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M845.396 447.324L855.537 447.324L855.537 507.41L845.396 507.41L845.396 447.324Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M874.671 447.324L884.812 447.324L884.812 507.41L874.671 507.41L874.671 447.324Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1028.78 447.141L1175.15 447.141L1241.35 447.141L1240.6 470.593L1175.15 482.578L1028.78 482.578L973.438 468.93L974.924 447.507L1028.78 447.141Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M973.438 460.037L990.633 460.037L990.633 448.457L1004.02 448.457L1003.14 464.86L1018.3 464.86L1017.7 477.184L1041.61 477.733L1041.03 461.123L1070.43 461.44L1069.68 448.457L1083.33 448.457L1082.51 468.93L1071.74 468.93L1071.35 482.578L1101.96 487.736L1132.9 482.578L1132.9 468.93L1123.01 468.93L1123.04 455.261L1142.89 455.261L1142.89 468.93L1188.75 465.121L1187.79 447.507L1203.71 447.543L1205.77 468.93L1196.04 468.93L1195.77 477.367L1218.72 474.001L1217.82 464.291L1211.96 464.86L1211.04 453.685L1226.96 453.681L1227.34 463.675L1241.35 462.53" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M905.341 435.718L973.438 435.718L973.438 470.593L905.341 470.593L905.341 435.718Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1225.42 435.718L1293.33 435.718L1293.33 470.593L1225.42 470.593L1225.42 435.718Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1353.65 447.141L1363.79 447.141L1363.79 507.227L1353.65 507.227L1353.65 447.141Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<G opacity="1">
<Path d="M1060.16 380.533L1079.6 392.212C1079.6 392.212 1067.35 397.482 1060.16 412.849C1052.97 428.216 1051.56 436.248 1050.85 453.681C1050.15 471.113 1057.33 482.578 1057.33 482.578L1021.77 478.29C1021.77 478.29 1017.18 466.274 1021.62 447.507C1026.07 428.74 1029.92 419.965 1039.55 403.222C1049.18 386.478 1060.16 380.533 1060.16 380.533Z" fill="#9f9d9d" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1050.85 388.477C1050.85 388.477 1052.28 396.322 1056.13 398.655C1059.98 400.987 1067.67 401.829 1067.67 401.829" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1039.55 401.829C1039.55 401.829 1043.64 409.06 1047.48 411.392C1051.33 413.725 1060.16 412.849 1060.16 412.849" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1032.85 416.003C1032.85 416.003 1037.31 424.624 1041.16 426.957C1045 429.289 1054.65 426.084 1054.65 426.084" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1024.68 433.521C1024.68 433.521 1031.21 441.57 1035.49 442.959C1041.31 444.845 1050.85 441.642 1050.85 441.642" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1021.34 447.507C1021.34 447.507 1025.69 459.403 1033.08 460.037C1039.76 460.611 1049.64 457.622 1049.64 457.622" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<G opacity="1">
<Path d="M1121.99 380.533L1102.55 392.212C1102.55 392.212 1114.8 397.482 1121.99 412.849C1129.18 428.216 1130.59 436.248 1131.3 453.681C1132 471.113 1124.82 482.578 1124.82 482.578L1160.38 478.29C1160.38 478.29 1164.97 466.274 1160.53 447.507C1156.08 428.74 1152.23 419.965 1142.6 403.222C1132.97 386.478 1121.99 380.533 1121.99 380.533Z" fill="#9f9d9d" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1131.3 388.477C1131.3 388.477 1129.87 396.322 1126.02 398.655C1122.17 400.987 1114.48 401.829 1114.48 401.829" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1142.6 401.829C1142.6 401.829 1138.51 409.06 1134.67 411.392C1130.82 413.725 1121.99 412.849 1121.99 412.849" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1149.3 416.003C1149.3 416.003 1144.84 424.624 1140.99 426.957C1137.15 429.289 1127.5 426.084 1127.5 426.084" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1157.47 433.521C1157.47 433.521 1150.94 441.57 1146.66 442.959C1140.84 444.845 1131.3 441.642 1131.3 441.642" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1160.81 447.507C1160.81 447.507 1156.46 459.403 1149.07 460.037C1142.39 460.611 1132.51 457.622 1132.51 457.622" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<Path d="M1325.24 447.507L1335.38 447.507L1335.38 507.593L1325.24 507.593L1325.24 447.507Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M895.635 447.507C895.635 447.507 989.665 482.578 1093.21 482.578C1196.75 482.578 1309.81 447.507 1309.81 447.507C1309.81 447.507 1560.92 893.548 1426.27 1042.23C1291.61 1190.91 903.866 1190.91 771.208 1042.23C638.55 893.548 895.635 447.507 895.635 447.507Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<Path d="M769.441 477.367C769.441 473.294 782.876 452.276 794.803 451.145C799.611 450.689 801.595 468.93 806.338 468.93C822.848 468.93 836.231 473.563 836.231 479.278C836.231 484.992 822.848 489.625 806.338 489.625C801.982 489.625 795.667 505.076 791.217 504.301C778.801 502.136 769.441 481.574 769.441 477.367Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M794.803 462.516C794.803 462.516 779.93 469.729 779.93 477.733C779.93 485.736 792.889 493.845 794.803 494.529" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M794.803 433.521L825.747 433.521L825.747 521.213L794.803 521.213L794.803 433.521Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M801.902 460.037C801.902 455.126 805.664 451.145 810.304 451.145C814.944 451.145 818.706 455.126 818.706 460.037C818.706 464.949 814.944 468.93 810.304 468.93C805.664 468.93 801.902 464.949 801.902 460.037Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M801.874 498.518C801.874 493.607 805.635 489.625 810.275 489.625C814.916 489.625 818.677 493.607 818.677 498.518C818.677 503.429 814.916 507.41 810.275 507.41C805.635 507.41 801.874 503.429 801.874 498.518Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M808.436 462.791L812.649 456.445" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M808.169 501.691L812.382 495.345" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<G opacity="1">
<Path d="M1439.81 477.901C1439.81 473.828 1426.38 452.81 1414.45 451.679C1409.64 451.223 1407.66 469.464 1402.91 469.464C1386.41 469.464 1373.02 474.097 1373.02 479.812C1373.02 485.527 1386.41 490.159 1402.91 490.159C1407.27 490.159 1413.59 505.61 1418.04 504.835C1430.45 502.671 1439.81 482.108 1439.81 477.901Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1414.45 463.05C1414.45 463.05 1429.32 470.264 1429.32 478.267C1429.32 486.27 1416.36 494.379 1414.45 495.063" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1414.45 434.055L1383.51 434.055L1383.51 521.747L1414.45 521.747L1414.45 434.055Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1407.35 460.572C1407.35 455.66 1403.59 451.679 1398.95 451.679C1394.31 451.679 1390.55 455.66 1390.55 460.572C1390.55 465.483 1394.31 469.464 1398.95 469.464C1403.59 469.464 1407.35 465.483 1407.35 460.572Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1407.38 499.052C1407.38 494.141 1403.62 490.159 1398.98 490.159C1394.34 490.159 1390.58 494.141 1390.58 499.052C1390.58 503.963 1394.34 507.944 1398.98 507.944C1403.62 507.944 1407.38 503.963 1407.38 499.052Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1400.82 463.325L1396.6 456.98" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1401.08 502.225L1396.87 495.879" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<Path d="M916.776 453.685L807.816 884.653L812.606 1007.33L877.594 1060.63L1085.21 1099.04L1096.84 1101.19" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1287.51 453.155L1385.86 884.653L1381.07 1007.33L1316.09 1060.63L1096.84 1101.19" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1079.6 1098.02C1079.6 1098.02 1092.96 1101.08 1096.84 1101.19C1100.72 1101.3 1113.11 1098.21 1113.11 1098.21" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1039.55 658.666L1153.16 658.666L1153.16 681.774L1039.55 681.774L1039.55 658.666Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1003.99 669.272C1003.99 662.203 1009.63 656.473 1016.58 656.473C1023.53 656.473 1029.17 662.203 1029.17 669.272C1029.17 676.341 1023.53 682.071 1016.58 682.071C1009.63 682.071 1003.99 676.341 1003.99 669.272Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1164.27 669.272C1164.27 662.203 1169.91 656.473 1176.86 656.473C1183.81 656.473 1189.45 662.203 1189.45 669.272C1189.45 676.341 1183.81 682.071 1176.86 682.071C1169.91 682.071 1164.27 676.341 1164.27 669.272Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1381.35 869.616L1462.34 852.062L1466.84 855.83L1470.47 889.754L1466.84 895.52L1385.86 902.872L1387.43 885.157L1381.35 869.616Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M814.001 869.616L733.011 852.062L728.506 855.83L724.881 889.754L728.506 895.52L809.484 902.872L807.92 885.157L814.001 869.616Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<G opacity="1">
<Path d="M786.684 745.241L820.345 755.388L827.84 771.993L766.853 752.466L786.684 745.241Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M781.32 771.932L814.981 782.079L822.475 798.684L761.489 779.156L781.32 771.932Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M774.548 798.62L808.208 808.767L815.703 825.372L754.717 805.845L774.548 798.62Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M824.287 763.682L776.185 748.606" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M768.739 825.31L802.4 835.457L809.895 852.062L748.909 832.534L768.739 825.31Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M806.898 844.01L758.797 828.934" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M818.594 790.424L770.492 775.347" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M812.819 817.116L764.718 802.039" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1414.18 745.241L1380.52 755.388L1373.02 771.993L1434.01 752.466L1414.18 745.241Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1419.54 771.932L1385.88 782.079L1378.39 798.684L1439.37 779.156L1419.54 771.932Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1426.31 798.62L1392.65 808.767L1385.16 825.372L1446.14 805.845L1426.31 798.62Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1376.57 763.682L1424.68 748.606" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1432.12 825.31L1398.46 835.457L1390.97 852.062L1451.95 832.534L1432.12 825.31Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1393.96 844.01L1442.07 828.934" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1382.27 790.424L1430.37 775.347" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1388.04 817.116L1436.14 802.039" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M737.552 877.467C737.552 871.489 741.874 866.644 747.205 866.644C752.536 866.644 756.858 871.489 756.858 877.467C756.858 883.445 752.536 888.291 747.205 888.291C741.874 888.291 737.552 883.445 737.552 877.467Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M776.446 882.7C776.446 876.723 780.768 871.877 786.099 871.877C791.43 871.877 795.752 876.723 795.752 882.7C795.752 888.678 791.43 893.524 786.099 893.524C780.768 893.524 776.446 888.678 776.446 882.7Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M743.514 881.631L750.896 873.304" fill="none" opacity="0.943186" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M782.408 886.908L789.79 878.581" fill="none" opacity="0.943186" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1455.01 877.467C1455.01 871.489 1450.68 866.644 1445.35 866.644C1440.02 866.644 1435.7 871.489 1435.7 877.467C1435.7 883.445 1440.02 888.291 1445.35 888.291C1450.68 888.291 1455.01 883.445 1455.01 877.467Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1416.11 882.7C1416.11 876.723 1411.79 871.877 1406.46 871.877C1401.13 871.877 1396.81 876.723 1396.81 882.7C1396.81 888.678 1401.13 893.524 1406.46 893.524C1411.79 893.524 1416.11 888.678 1416.11 882.7Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1449.04 881.631L1441.66 873.304" fill="none" opacity="0.943186" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1410.15 886.908L1402.77 878.581" fill="none" opacity="0.943186" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<Path d="M1050.98 1032.9C1050.98 1012.23 1049.19 995.475 1058.92 995.475C1073.06 995.475 1068.89 1012.23 1068.89 1032.9C1068.89 1053.57 1064.88 1070.33 1059.94 1070.33C1054.99 1070.33 1050.98 1053.57 1050.98 1032.9Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1084.64 1040.26C1084.64 1019.59 1079.99 1003.76 1093.59 1002.83C1102.55 1002.22 1102.55 1019.59 1102.55 1040.26C1102.55 1060.93 1098.54 1077.69 1093.59 1077.69C1088.65 1077.69 1084.64 1060.93 1084.64 1040.26Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1117.13 1032.9C1117.13 1012.23 1113.11 995.475 1126.08 995.475C1139.37 995.475 1135.04 1012.23 1135.04 1032.9C1135.04 1053.57 1131.03 1070.33 1126.08 1070.33C1121.14 1070.33 1117.13 1053.57 1117.13 1032.9Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1079.6 392.212L1102.55 392.212L1102.55 482.578L1079.6 482.578L1079.6 392.212Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1086.41 362.012L1095.74 362.012L1095.74 392.212L1086.41 392.212L1086.41 362.012Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1091.07 392.212L1091.07 482.578" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M906.183 449.523L976.1 451.363" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1292.91 450.742L1225.42 451.363" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G id="RiGhtLeG">
<Path d="M878.121 1123.63L886.743 1120.43L901.732 1160.75L893.11 1163.96L878.121 1123.63Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M834.358 1183.02L913.784 1154.33L914.539 1127.84L943.888 1135.97L976.1 1142.95L939.39 1182.6L849.304 1217.7L834.358 1183.02Z" fill="#888a8a" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M796.213 1119.05L864.217 1113.06L895.118 1121.3L811.159 1153.74L796.213 1119.05Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M672.453 1195.24C624.201 1068.57 615.844 958.682 669.281 933.809C691.681 923.383 746.29 922.64 777.119 957.847C808.377 993.546 839.909 1047.6 864.202 1111.38C891.889 1184.07 904.156 1253.58 900.798 1302.98C898.304 1339.67 905.039 1386.18 838.849 1399.36C785.444 1409.99 720.704 1321.92 672.453 1195.24Z" fill="#bababa" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="6.29342"/>
<Path d="M672.216 1204.84C626.187 1084.01 619.228 974.485 656.672 960.222C694.115 945.959 761.783 1032.36 807.811 1153.19C853.84 1274.03 860.799 1383.55 823.355 1397.82C785.912 1412.08 718.244 1325.68 672.216 1204.84Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M643.604 966.85C643.604 966.85 677.445 913.738 743.31 965.537C754.085 974.012 822.373 1059.17 847.452 1150.74C860.147 1197.09 884.42 1303.78 884.42 1308.19C884.42 1377.24 831.283 1399.36 831.283 1399.36" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M718.288 1167.87C714.737 1155.24 717.666 1143.36 724.831 1141.35C731.995 1139.33 740.682 1147.94 744.233 1160.57C747.785 1173.2 744.855 1185.08 737.691 1187.09C730.526 1189.11 721.839 1180.5 718.288 1167.87Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M640.437 979.423C640.437 979.423 645.056 969.042 650.388 965.537C655.72 962.033 663.957 960.023 663.957 960.023L658.736 995.475L640.437 979.423Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M802.246 1396.04C802.246 1396.04 815.942 1400.78 822.161 1399.36C828.381 1397.93 834.02 1390.21 834.02 1390.21L803.316 1371.72L802.246 1396.04Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M664.818 1183.18L670.6 1201.02L678.477 1187.38L664.818 1183.18Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M796.618 1128.88L805.019 1150.74L789.081 1140.56L796.618 1128.88Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M725.094 1165.76C723.747 1160.36 725.416 1155.3 728.822 1154.45C732.228 1153.6 736.08 1157.29 737.427 1162.68C738.774 1168.08 737.105 1173.14 733.699 1173.99C730.294 1174.84 726.441 1171.16 725.094 1165.76Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<Path d="M726.551 984.027L765.11 956.445L768.637 964.969L775.291 972.412L734.112 1000.73L733.029 990.138L726.551 984.027Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M769.458 965.049L734.119 990.096" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M697.816 961.297L719.271 934.128L724.239 938.004L731.261 940.344L708.037 968.702L704.343 962.921L697.816 961.297Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M724.877 937.811L705.151 962.577" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M677.445 951.247L684.753 935.165L687.089 937.968L690.191 939.913L682.214 956.647L680.294 952.702L677.445 951.247Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M687.345 937.884L680.612 952.533" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M662.02 949.189L661.986 942.658L662.924 943.813L663.957 944.621L663.897 951.415L662.93 949.796L662.02 949.189Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M662.98 943.779L662.991 949.728" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M755.504 1023.01L796.153 998.609L798.984 1007.39L805.019 1015.34L761.7 1040.26L761.47 1029.62L755.504 1023.01Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M799.796 1007.54L762.561 1029.66" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M781.851 1068.3L823.041 1044.83L825.673 1053.67L831.527 1061.76L787.657 1085.69L787.667 1075.05L781.851 1068.3Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M826.481 1053.83L788.756 1075.12" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M802.246 1111.39L843.854 1088.67L846.326 1097.55L852.032 1105.75L807.735 1128.88L807.939 1118.24L802.246 1111.39Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M847.131 1097.73L809.026 1118.33" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M819.469 1156.94L861.077 1134.22L863.549 1143.11L869.254 1151.3L824.958 1174.44L825.161 1163.79L819.469 1156.94Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M864.353 1143.29L826.249 1163.88" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M834.722 1201.52L878.189 1182.6L879.859 1191.67L884.812 1200.34L838.631 1219.43L839.782 1208.85L834.722 1201.52Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M880.645 1191.92L840.857 1209.04" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M849.933 1250.4L889.769 1237.49L890.23 1245.69L893.587 1253.83L851.375 1266.64L853.53 1257.36L849.933 1250.4Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M890.885 1245.98L854.444 1257.62" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M859.247 1297.8L891.684 1294.3L890.165 1300.67L890.807 1307.45L856.631 1310.51L860.334 1303.72L859.247 1297.8Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M890.584 1301L860.952 1304.07" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M857.575 1338.64L888.817 1342L887.179 1347.79L887.604 1354.42L854.704 1350.26L858.451 1344.53L857.575 1338.64Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M887.572 1348.19L859.034 1345" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M853.44 1370.35L871.221 1374.02L869.315 1377.13L868.481 1380.83L849.858 1376.62L852.992 1373.66L853.44 1370.35Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M869.48 1377.38L853.259 1373.95" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M839.966 1390.61L845.396 1392.59L844.958 1393.57L844.862 1394.8L839.16 1392.6L839.969 1391.72L839.966 1390.61Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M845.017 1393.66L840.06 1391.83" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<Path d="M737.552 1128.88C737.552 1128.88 751.953 1134.24 758.043 1153.74C764.133 1173.23 755.504 1187.38 755.504 1187.38" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M730.155 1127C730.155 1127 717.578 1126.46 710.291 1134.22C703.004 1141.98 704.583 1150.74 704.583 1150.74" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M944.664 1135.16L934.025 1164.22L889.572 1183.61" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M891.684 1174.11C891.684 1174.11 908.438 1179.45 924.603 1171.1C940.769 1162.76 944.664 1138.87 944.664 1138.87L983.461 1145.03C983.461 1145.03 970.254 1176.8 949.619 1192.1C928.985 1207.39 900.923 1205.76 900.923 1205.76C900.923 1205.76 908.493 1200.12 906.183 1192.1C903.873 1184.07 891.684 1174.11 891.684 1174.11Z" fill="#c0c0c0" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G id="LeftLeG">
<Path d="M1342.38 1119.13L1333.76 1115.93L1318.77 1156.26L1327.4 1159.46L1342.38 1119.13Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1386.15 1178.52L1306.72 1149.83L1303.39 1120.43L1276.62 1131.48L1244.4 1138.45L1281.12 1178.1L1371.2 1213.21L1386.15 1178.52Z" fill="#888a8a" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1424.29 1114.56L1351.25 1099.61L1322.23 1113.06L1409.35 1149.24L1424.29 1114.56Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1548.05 1190.75C1596.3 1064.07 1604.66 954.185 1551.22 929.312C1528.82 918.886 1474.21 918.144 1443.39 953.351C1412.13 989.049 1380.6 1043.11 1356.3 1106.88C1328.62 1179.57 1316.35 1249.09 1319.71 1298.49C1322.2 1335.18 1315.47 1381.69 1381.66 1394.86C1435.06 1405.49 1499.8 1317.42 1548.05 1190.75Z" fill="#bababa" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="6.29342"/>
<Path d="M1548.29 1200.35C1594.32 1079.51 1601.28 969.988 1563.83 955.725C1526.39 941.463 1458.72 1027.86 1412.69 1148.7C1366.67 1269.54 1359.71 1379.06 1397.15 1393.32C1434.59 1407.58 1502.26 1321.19 1548.29 1200.35Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1576.9 962.354C1576.9 962.354 1543.06 909.242 1477.2 961.041C1466.42 969.515 1398.13 1054.67 1373.05 1146.24C1360.36 1192.59 1336.09 1299.28 1336.09 1303.7C1336.09 1372.74 1389.22 1394.86 1389.22 1394.86" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1502.22 1163.37C1505.77 1150.74 1502.84 1138.87 1495.67 1136.85C1488.51 1134.84 1479.82 1143.45 1476.27 1156.08C1472.72 1168.71 1475.65 1180.58 1482.81 1182.6C1489.98 1184.61 1498.67 1176 1502.22 1163.37Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1580.07 974.927C1580.07 974.927 1575.45 964.546 1570.12 961.041C1564.79 957.536 1556.55 955.527 1556.55 955.527L1561.77 990.978L1580.07 974.927Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1418.26 1391.54C1418.26 1391.54 1404.56 1396.29 1398.34 1394.86C1392.12 1393.44 1386.49 1385.71 1386.49 1385.71L1417.19 1367.22L1418.26 1391.54Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1555.69 1178.68L1549.9 1196.52L1542.03 1182.89L1555.69 1178.68Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1423.89 1124.39L1415.49 1146.24L1431.42 1136.06L1423.89 1124.39Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1495.41 1161.26C1496.76 1155.87 1495.09 1150.8 1491.68 1149.95C1488.28 1149.1 1484.43 1152.79 1483.08 1158.18C1481.73 1163.58 1483.4 1168.64 1486.81 1169.49C1490.21 1170.34 1494.06 1166.66 1495.41 1161.26Z" fill="#8c8e8e" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<Path d="M1493.95 979.53L1455.39 951.948L1451.87 960.472L1445.21 967.916L1486.39 996.231L1487.48 985.641L1493.95 979.53Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1451.05 960.553L1486.39 985.599" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1522.69 956.801L1501.23 929.632L1496.27 933.508L1489.24 935.847L1512.47 964.205L1516.16 958.424L1522.69 956.801Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1495.63 933.314L1515.35 958.081" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1543.06 946.751L1535.75 930.669L1533.42 933.471L1530.31 935.417L1538.29 952.15L1540.21 948.206L1543.06 946.751Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1533.16 933.387L1539.89 948.036" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1558.49 944.693L1558.52 938.162L1557.58 939.316L1556.55 940.124L1556.61 946.918L1557.58 945.3L1558.49 944.693Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1557.53 939.283L1557.51 945.232" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1465 1018.51L1424.35 994.113L1421.52 1002.89L1415.49 1010.85L1458.81 1035.76L1459.04 1025.12L1465 1018.51Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1420.71 1003.04L1457.94 1025.17" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1438.65 1063.81L1397.46 1040.33L1394.83 1049.17L1388.98 1057.26L1432.85 1081.2L1432.84 1070.55L1438.65 1063.81Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1394.02 1049.34L1431.75 1070.62" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1418.26 1106.89L1376.65 1084.17L1374.18 1093.06L1368.47 1101.25L1412.77 1124.39L1412.57 1113.74L1418.26 1106.89Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1373.37 1093.24L1411.48 1113.83" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1401.04 1152.45L1359.43 1129.72L1356.96 1138.61L1351.25 1146.8L1395.55 1169.94L1395.34 1159.3L1401.04 1152.45Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1356.15 1138.79L1394.26 1159.39" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1385.78 1197.03L1342.32 1178.1L1340.65 1187.17L1335.69 1195.84L1381.87 1214.94L1380.72 1204.35L1385.78 1197.03Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1339.86 1187.42L1379.65 1204.54" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1370.57 1245.9L1330.74 1232.99L1330.28 1241.19L1326.92 1249.33L1369.13 1262.15L1366.98 1252.86L1370.57 1245.9Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1329.62 1241.49L1366.06 1253.12" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1361.26 1293.31L1328.82 1289.8L1330.34 1296.17L1329.7 1302.96L1363.87 1306.01L1360.17 1299.22L1361.26 1293.31Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1329.92 1296.5L1359.55 1299.57" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M1362.93 1334.15L1331.69 1337.51L1333.33 1343.29L1332.9 1349.92L1365.8 1345.77L1362.05 1340.04L1362.93 1334.15Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1332.93 1343.69L1361.47 1340.5" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M1367.06 1365.85L1349.28 1369.53L1351.19 1372.64L1352.02 1376.34L1370.65 1372.13L1367.51 1369.17L1367.06 1365.85Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1351.03 1372.88L1367.25 1369.46" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G opacity="1">
<Path d="M1380.54 1386.11L1375.11 1388.09L1375.55 1389.07L1375.64 1390.3L1381.35 1388.1L1380.54 1387.22L1380.54 1386.11Z" fill="#adadad" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1375.49 1389.16L1380.45 1387.33" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<Path d="M1482.95 1124.39C1482.95 1124.39 1468.55 1129.75 1462.46 1149.24C1456.37 1168.74 1465 1182.89 1465 1182.89" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1490.35 1122.51C1490.35 1122.51 1502.93 1121.96 1510.21 1129.72C1517.5 1137.49 1515.92 1146.24 1515.92 1146.24" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1275.84 1130.67L1286.48 1159.72L1330.93 1179.11" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
<Path d="M1328.82 1169.62C1328.82 1169.62 1312.07 1174.95 1295.9 1166.61C1279.74 1158.26 1275.84 1134.37 1275.84 1134.37L1237.04 1140.53C1237.04 1140.53 1250.25 1172.31 1270.89 1187.6C1291.52 1202.9 1319.58 1201.27 1319.58 1201.27C1319.58 1201.27 1312.01 1195.63 1314.32 1187.6C1316.63 1179.58 1328.82 1169.62 1328.82 1169.62Z" fill="#c0c0c0" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.65464"/>
</G>
<G id="RiGhtArm">
<Path d="M766.86 467.622C766.86 467.622 771.025 510.382 801.433 515.495C831.841 520.608 854.366 521.771 854.366 521.771L820.677 566.253C820.677 566.253 787.401 575.389 763.596 570.222C739.791 565.056 727.434 543.043 727.434 543.043L766.86 467.622Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M785.444 435.718C814.189 413.17 884.42 431.556 884.42 431.556L879.742 482.578L855.537 521.747C855.537 521.747 813.239 532.078 791.217 521.213C769.194 510.349 764.14 473.118 764.14 473.118C764.14 473.118 773.366 445.192 785.444 435.718Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M812.943 427.261C812.943 427.261 819.726 424.567 827.84 424.491C835.953 424.415 845.396 426.252 845.396 426.252L845.396 523.548C845.396 523.548 837.605 526.184 827.737 526.184C817.868 526.184 805.923 524.658 805.923 524.658L812.943 427.261Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M829.08 455.409L823.234 452.988L820.812 447.141L823.234 441.295L829.08 438.873L834.926 441.295L837.348 447.141L834.926 452.988L829.08 455.409Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M827.737 485.452L821.89 483.03L819.469 477.184L821.89 471.338L827.737 468.916L833.583 471.338L836.005 477.184L833.583 483.03L827.737 485.452Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M825.64 515.495L819.794 513.073L817.372 507.227L819.794 501.381L825.64 498.959L831.486 501.381L833.908 507.227L831.486 513.073L825.64 515.495Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M728.634 539.96C728.634 539.96 743.649 564.157 767.582 569.044C791.515 573.932 823.206 563.124 823.206 563.124L797.685 601.289C797.685 601.289 766.196 609.698 744.597 605.304C722.998 600.911 711.29 583.715 711.29 583.715L728.634 539.96Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M711.29 583.715C711.29 583.715 724.28 601.447 747.4 605.092C770.521 608.738 797.685 601.289 797.685 601.289L777.899 639.686C777.899 639.686 748.526 649.341 727.662 646.068C706.798 642.795 697.224 625.09 697.224 625.09L711.29 583.715Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M700.329 617.162C700.329 617.162 707.619 636.781 730.74 640.426C753.86 644.072 780.573 633.799 780.573 633.799L762.185 673.179C762.185 673.179 732.813 682.834 711.949 679.562C691.085 676.289 683.291 657.942 683.291 657.942L700.329 617.162Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M683.318 658.3C683.318 658.3 690.011 669.426 713.131 673.072C736.252 676.717 764.14 668.971 764.14 668.971L742.812 710.802C742.812 710.802 713.44 720.457 692.576 717.184C671.711 713.911 665.25 697.958 665.25 697.958L683.318 658.3Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M666.298 695.142C666.298 695.142 676.234 706.764 699.354 710.409C722.475 714.055 744.293 706.574 744.293 706.574L724.255 751.438C724.255 751.438 694.883 761.093 674.019 757.82C653.154 754.547 648.103 741.867 648.103 741.867L651.75 731.02L666.298 695.142Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M651.689 731.025C651.689 731.025 668.289 745.799 686.745 747.693C710.308 750.111 727.784 743.188 727.784 743.188L709.78 791.081C709.78 791.081 684.217 804.683 663.353 801.41C642.489 798.137 638.502 769.592 638.502 769.592L651.689 731.025Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M624.311 878.275L667.066 884.026L665.981 895.475L662.879 908.191C662.879 908.191 650.153 912.214 640.541 910.818C630.929 909.421 624.432 902.605 624.432 902.605L623.374 887.486L624.311 878.275Z" fill="#2a2a2a" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M638.517 769.778C638.517 769.778 654.005 781.141 671.697 783.192C695.164 785.912 715.451 775.645 715.451 775.645L701.198 810.44C701.198 810.44 684.06 817.285 662.885 814.847C641.71 812.41 632.921 799.415 632.921 799.415L638.517 769.778Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M632.932 799.56C632.932 799.56 639.269 811.197 662.735 813.917C686.202 816.637 701.446 809.932 701.446 809.932L687.381 846.659C687.381 846.659 672.128 850.844 650.953 848.406C638.101 846.927 637.27 858.22 634.522 855.266C632.742 853.353 627.544 850.484 627.146 836.557C626.749 822.631 632.932 799.56 632.932 799.56Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M626.933 835.065C626.933 835.065 632.356 841.21 655.823 843.929C679.29 846.649 688.663 842.513 688.663 842.513L678.191 869.046C678.191 869.046 672.221 884.748 651.046 882.311C629.87 879.873 625.346 865.037 625.346 865.037L626.933 835.065Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M625.06 861.255C625.06 861.255 625.946 868.965 649.412 871.685C672.879 874.405 678.188 869.013 678.188 869.013L669.476 892.119C669.476 892.119 660.149 895.345 644.776 893.987C627.909 892.497 623.108 885.105 623.108 885.105L625.06 861.255Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<G opacity="1">
<Path d="M683.461 940.413L678.044 945.331L653.166 937.516L660.804 957.089L666.955 956.722L667.693 961.441C667.693 961.441 680.918 984.67 683.314 1000.04C685.71 1015.41 677.277 1022.92 677.277 1022.92L667.518 1029.71C667.518 1029.71 664.868 1045.58 669.165 1054.12C671.692 1059.14 674.639 1062.01 679.591 1063.03C683.058 1063.74 689.335 1063.25 689.335 1063.25L700.814 1036.57L697.642 1033.45C697.642 1033.45 708.089 1017.66 704.544 994.396C700.999 971.137 683.461 940.413 683.461 940.413Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M682.947 939.619L673.031 940.104L663.426 940.833L677.619 945.175L682.947 939.619Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M667.756 1030.47L663.331 1032.47C663.331 1032.47 664.002 1047.52 670.804 1056.26C675.096 1061.77 688.86 1063.33 688.86 1063.33L672.718 1035.47L667.756 1030.47Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<Path d="M657.375 948.343L676.67 953.262C676.67 953.262 692.302 989.723 695.124 1000.5C697.881 1011.02 689.384 1028.44 689.384 1028.44" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M678.265 1022.32L688.224 1028.38L700.682 1038.34" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M663.918 1035.41L671.516 1034.79" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M664.236 1040.29L675.76 1040.14" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M665.361 1046.27L678.917 1045.44" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M668.094 1052.15L683.071 1051.39" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M671.521 1057.51L684.363 1056.57" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M677.242 1061.52L687.858 1060.65" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
</G>
<G opacity="1">
<G opacity="1">
<Path d="M619.062 964.575L619.429 963.816L612.431 965.359C612.431 965.359 611.406 967.796 614.457 970.617C620.759 976.443 630.604 977.013 630.604 977.013L619.062 964.575Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M664.287 900.333C664.287 900.333 652.092 903.974 643.43 902.872C634.768 901.77 623.108 897.036 623.108 897.036L620.137 906.058L613.114 908.134L611.743 914.364L616.798 917.109L615.566 921.183L621.993 928.607L621.738 933.038C621.738 933.038 611.326 935.216 609.191 942.281C608.689 943.943 606.664 950.641 606.664 950.641L591.004 960.046L584.788 957.483C584.788 957.483 576.765 993.428 577.595 1019.68C578.072 1034.73 597.592 1046.3 597.592 1046.3L600.624 1047.63L597.823 1050.34L611.055 1060.65L617.184 1070.95L625.899 1074.34C625.899 1074.34 629.577 1060.62 631.353 1051.89C633.13 1043.16 628.986 1036.1 628.986 1036.1L624.389 1033.15L615.043 1032.36C615.043 1032.36 605.284 1027.66 602.855 1013.48C600.426 999.294 605.317 977.051 605.317 977.051L603.474 973.29L618.874 963.672C618.874 963.672 621.322 975.393 635.208 978.554C648.605 981.603 662.742 978.186 666.794 961.969C670.326 947.837 656.963 938.161 656.963 938.161L657.377 932.669L663.724 927.309L664.433 923.334L671.924 922.111L672.898 915.832L665.613 911.274L664.287 900.333Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M661.006 960.67C663.324 953.002 659.108 945.035 651.589 942.875C644.071 940.715 636.098 945.18 633.781 952.849C631.463 960.517 635.679 968.485 643.197 970.644C650.716 972.804 658.689 968.339 661.006 960.67Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M665.966 911.434C665.966 911.434 652.438 912.83 641.406 911.112C630.375 909.394 620.645 904.378 620.645 904.378" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M665.229 923.522C665.229 923.522 654.356 923.15 641.445 921.079C628.534 919.007 616.745 917.282 616.745 917.282" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M657.255 932.691L622.714 928.544" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M625.951 938.219C625.951 938.219 621.141 938.421 618.563 942.278C615.985 946.135 614.913 954.358 614.913 954.358L596.171 967.754L589.1 965.722C589.1 965.722 582.153 1002.66 583.982 1021.96C584.394 1026.32 612.972 1047.08 612.972 1047.08" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M617.876 1032.19L618.005 1041.06L611.733 1051.18L607.172 1047.95L604.163 1054.41" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
</G>
</G>
</G>
<G id="LeftArm">
<Path d="M1442.8 470.969C1442.8 470.969 1438.64 513.729 1408.23 518.842C1377.82 523.954 1355.3 525.117 1355.3 525.117L1388.99 569.6C1388.99 569.6 1422.26 578.735 1446.07 573.569C1469.87 568.403 1482.23 546.39 1482.23 546.39L1442.8 470.969Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1424.22 439.065C1395.47 416.517 1325.24 434.902 1325.24 434.902L1329.92 485.925L1351.25 526.184C1351.25 526.184 1396.42 535.424 1418.45 524.56C1440.47 513.696 1445.52 476.465 1445.52 476.465C1445.52 476.465 1436.3 448.539 1424.22 439.065Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1396.72 430.608C1396.72 430.608 1389.94 427.913 1381.82 427.838C1373.71 427.762 1364.27 429.599 1364.27 429.599L1364.27 526.894C1364.27 526.894 1372.06 529.531 1381.93 529.531C1391.79 529.531 1403.74 528.005 1403.74 528.005L1396.72 430.608Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1380.58 458.756L1386.43 456.334L1388.85 450.488L1386.43 444.642L1380.58 442.22L1374.74 444.642L1372.32 450.488L1374.74 456.334L1380.58 458.756Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1381.93 488.799L1387.77 486.377L1390.19 480.531L1387.77 474.685L1381.93 472.263L1376.08 474.685L1373.66 480.531L1376.08 486.377L1381.93 488.799Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1384.02 518.842L1389.87 516.42L1392.29 510.574L1389.87 504.727L1384.02 502.306L1378.18 504.727L1375.76 510.574L1378.18 516.42L1384.02 518.842Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1481.03 543.306C1481.03 543.306 1466.01 567.503 1442.08 572.391C1418.15 577.279 1386.46 566.471 1386.46 566.471L1411.98 604.635C1411.98 604.635 1443.47 613.044 1465.07 608.651C1486.67 604.258 1498.37 587.062 1498.37 587.062L1481.03 543.306Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1498.37 587.062C1498.37 587.062 1485.38 604.793 1462.26 608.439C1439.14 612.084 1411.98 604.635 1411.98 604.635L1431.76 643.032C1431.76 643.032 1461.14 652.687 1482 649.415C1502.87 646.142 1512.44 628.437 1512.44 628.437L1498.37 587.062Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1509.33 620.508C1509.33 620.508 1502.04 640.128 1478.92 643.773C1455.8 647.418 1429.09 637.146 1429.09 637.146L1447.48 676.526C1447.48 676.526 1476.85 686.181 1497.71 682.908C1518.58 679.635 1526.37 661.289 1526.37 661.289L1509.33 620.508Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1526.35 661.646C1526.35 661.646 1519.65 672.773 1496.53 676.419C1473.41 680.064 1445.52 672.318 1445.52 672.318L1466.85 714.149C1466.85 714.149 1496.22 723.804 1517.09 720.531C1537.95 717.258 1544.41 701.305 1544.41 701.305L1526.35 661.646Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1543.37 698.488C1543.37 698.488 1533.43 710.11 1510.31 713.756C1487.19 717.401 1465.37 709.92 1465.37 709.92L1485.41 754.785C1485.41 754.785 1514.78 764.44 1535.64 761.167C1556.51 757.894 1561.56 745.214 1561.56 745.214L1557.91 734.367L1543.37 698.488Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1557.97 734.372C1557.97 734.372 1541.37 749.146 1522.92 751.04C1499.36 753.458 1481.88 746.534 1481.88 746.534L1499.88 794.428C1499.88 794.428 1525.45 808.029 1546.31 804.757C1567.17 801.484 1571.16 772.939 1571.16 772.939L1557.97 734.372Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1585.35 881.622L1542.6 887.373L1543.68 898.821L1546.78 911.538C1546.78 911.538 1559.51 915.561 1569.12 914.165C1578.73 912.768 1585.23 905.952 1585.23 905.952L1586.29 890.833L1585.35 881.622Z" fill="#2a2a2a" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1571.15 773.125C1571.15 773.125 1555.66 784.488 1537.97 786.539C1514.5 789.259 1494.21 778.992 1494.21 778.992L1508.47 813.787C1508.47 813.787 1525.6 820.632 1546.78 818.194C1567.95 815.757 1576.74 802.762 1576.74 802.762L1571.15 773.125Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1576.73 802.907C1576.73 802.907 1570.39 814.544 1546.93 817.264C1523.46 819.984 1508.22 813.279 1508.22 813.279L1522.28 850.006C1522.28 850.006 1537.54 854.19 1558.71 851.753C1571.56 850.274 1572.39 861.567 1575.14 858.613C1576.92 856.7 1582.12 853.831 1582.52 839.904C1582.91 825.978 1576.73 802.907 1576.73 802.907Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1582.73 838.412C1582.73 838.412 1577.31 844.556 1553.84 847.276C1530.37 849.996 1521 845.86 1521 845.86L1531.47 872.393C1531.47 872.393 1537.44 888.095 1558.62 885.657C1579.79 883.22 1584.32 868.384 1584.32 868.384L1582.73 838.412Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1584.6 864.602C1584.6 864.602 1583.72 872.312 1560.25 875.032C1536.78 877.751 1531.48 872.359 1531.48 872.359L1540.19 895.466C1540.19 895.466 1549.51 898.692 1564.89 897.334C1581.75 895.844 1586.56 888.452 1586.56 888.452L1584.6 864.602Z" fill="#626363" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<G opacity="1">
<Path d="M1526.2 943.76L1531.62 948.678L1556.5 940.862L1548.86 960.436L1542.71 960.069L1541.97 964.788C1541.97 964.788 1528.75 988.017 1526.35 1003.39C1523.95 1018.75 1532.39 1026.26 1532.39 1026.26L1542.15 1033.06C1542.15 1033.06 1544.8 1048.93 1540.5 1057.47C1537.97 1062.49 1535.02 1065.36 1530.07 1066.38C1526.61 1067.09 1520.33 1066.59 1520.33 1066.59L1508.85 1039.92L1512.02 1036.8C1512.02 1036.8 1501.57 1021 1505.12 997.743C1508.66 974.484 1526.2 943.76 1526.2 943.76Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1526.72 942.966L1536.63 943.451L1546.24 944.179L1532.04 948.522L1526.72 942.966Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1541.91 1033.82L1546.33 1035.82C1546.33 1035.82 1545.66 1050.86 1538.86 1059.6C1534.57 1065.12 1520.8 1066.68 1520.8 1066.68L1536.95 1038.81L1541.91 1033.82Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<G opacity="1">
<Path d="M1552.29 951.689L1532.99 956.609C1532.99 956.609 1517.36 993.07 1514.54 1003.84C1511.78 1014.37 1520.28 1031.78 1520.28 1031.78" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1531.4 1025.67L1521.44 1031.73L1508.98 1041.69" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1545.75 1038.75L1538.15 1038.14" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1545.43 1043.63L1533.9 1043.49" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1544.3 1049.62L1530.75 1048.79" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1541.57 1055.5L1526.59 1054.74" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1538.14 1060.86L1525.3 1059.92" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1532.42 1064.87L1521.81 1064" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
</G>
<G opacity="1">
<G opacity="1">
<Path d="M1590.6 967.922L1590.23 967.163L1597.23 968.706C1597.23 968.706 1598.26 971.143 1595.21 973.964C1588.9 979.79 1579.06 980.36 1579.06 980.36L1590.6 967.922Z" fill="#6d0202" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1545.38 903.68C1545.38 903.68 1557.57 907.321 1566.23 906.219C1574.9 905.117 1586.56 900.383 1586.56 900.383L1589.53 909.405L1596.55 911.481L1597.92 917.711L1592.87 920.456L1594.1 924.53L1587.67 931.953L1587.93 936.385C1587.93 936.385 1598.34 938.562 1600.47 945.628C1600.97 947.289 1603 953.988 1603 953.988L1618.66 963.393L1624.88 960.83C1624.88 960.83 1632.9 996.775 1632.07 1023.03C1631.59 1038.08 1612.07 1049.64 1612.07 1049.64L1609.04 1050.98L1611.84 1053.69L1598.61 1064L1592.48 1074.3L1583.76 1077.69C1583.76 1077.69 1580.09 1063.97 1578.31 1055.24C1576.53 1046.5 1580.68 1039.44 1580.68 1039.44L1585.27 1036.49L1594.62 1035.71C1594.62 1035.71 1604.38 1031.01 1606.81 1016.83C1609.24 1002.64 1604.35 980.397 1604.35 980.397L1606.19 976.637L1590.79 967.019C1590.79 967.019 1588.34 978.74 1574.46 981.901C1561.06 984.95 1546.92 981.533 1542.87 965.316C1539.34 951.184 1552.7 941.508 1552.7 941.508L1552.29 936.016L1545.94 930.656L1545.23 926.681L1537.74 925.458L1536.77 919.178L1544.05 914.62L1545.38 903.68Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
<G opacity="1">
<Path d="M1548.66 964.017C1546.34 956.349 1550.56 948.381 1558.07 946.222C1565.59 944.062 1573.57 948.527 1575.88 956.196C1578.2 963.864 1573.98 971.831 1566.47 973.991C1558.95 976.151 1550.97 971.686 1548.66 964.017Z" fill="#d0453b" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1543.7 914.781C1543.7 914.781 1557.23 916.177 1568.26 914.459C1579.29 912.741 1589.02 907.724 1589.02 907.724" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1544.43 926.869C1544.43 926.869 1555.31 926.497 1568.22 924.425C1581.13 922.354 1592.92 920.629 1592.92 920.629" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1552.41 936.038L1586.95 931.891" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1583.71 941.566C1583.71 941.566 1588.52 941.768 1591.1 945.625C1593.68 949.482 1594.75 957.705 1594.75 957.705L1613.49 971.101L1620.56 969.069C1620.56 969.069 1627.51 1006.01 1625.68 1025.31C1625.27 1029.66 1596.69 1050.42 1596.69 1050.42" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
<Path d="M1591.79 1035.53L1591.66 1044.41L1597.93 1054.52L1602.49 1051.3L1605.5 1057.76" fill="none" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.06773"/>
</G>
</G>
</G>
</G>
<G id="Head">
<Path d="M860.582 412.849C860.582 298.147 981.413 205.163 1096.84 205.163C1212.27 205.163 1344.52 298.147 1344.52 412.849C1344.52 527.551 1208.64 597.394 1093.21 597.394C977.783 597.394 860.582 527.551 860.582 412.849Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M891.754 410.17C888.716 315.125 985.587 269.187 985.587 269.187L1096.35 315.756L1203.86 269.187C1203.86 269.187 1297.05 297.145 1301.75 410.17C1303.05 441.332 1300.51 484.242 1258.43 519.597C1212.69 558.033 1131.89 568.903 1096.84 568.903C1062.87 568.903 976.041 561.521 934.793 524.757C894.343 488.705 892.783 442.383 891.754 410.17Z" fill="#2a2a2a" fill-rule="nonzero" opacity="1" stroke="none"/>
<G filter="url(#Filter)">
<Path d="M976.651 392.212C976.651 392.212 976.433 352.826 1009.49 353.212C1039.55 353.564 1039.55 392.212 1039.55 392.212" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M976.651 402.786C976.651 402.786 976.433 442.173 1009.49 441.786C1039.55 441.435 1039.55 402.786 1039.55 402.786" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<G filter="url(#Filter_2)">
<Path d="M1149.32 390.591C1149.32 390.591 1149.11 351.205 1182.17 351.591C1212.22 351.942 1212.22 390.591 1212.22 390.591" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1149.32 401.165C1149.32 401.165 1149.11 440.551 1182.17 440.165C1212.22 439.813 1212.22 401.165 1212.22 401.165" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="round" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<G filter="url(#Filter_3)">
<Path d="M1050.85 468.93C1050.85 468.93 1060.16 478.403 1060.16 487.977C1060.16 497.552 1050.85 507.227 1050.85 507.227" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1145.02 468.93C1145.02 468.93 1135.72 478.403 1135.72 487.977C1135.72 497.552 1145.02 507.227 1145.02 507.227" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1060.16 494.044C1060.16 494.044 1077.46 509.143 1096.35 509.143C1115.24 509.143 1135.72 494.044 1135.72 494.044" fill="none" opacity="1" stroke="#50d5ee" stroke-linecap="square" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
<G fill="#d0453b" opacity="1" stroke="none">
<Path d="M1276.71 1060.96L1276.85 1061.67C1276.91 1062.03 1276.91 1062.38 1276.83 1062.72C1276.76 1063.07 1276.63 1063.38 1276.44 1063.68C1276.24 1063.97 1276 1064.22 1275.71 1064.43C1275.42 1064.63 1275.09 1064.77 1274.73 1064.84C1274.41 1064.9 1274.09 1064.91 1273.75 1064.89C1273.4 1064.86 1273.08 1064.77 1272.79 1064.6C1272.49 1064.43 1272.22 1064.2 1271.99 1063.89C1271.76 1063.58 1271.59 1063.16 1271.49 1062.63L1270.3 1056.28C1270.22 1055.9 1270.22 1055.54 1270.29 1055.19C1270.36 1054.84 1270.49 1054.53 1270.68 1054.25C1270.88 1053.96 1271.12 1053.72 1271.43 1053.53C1271.73 1053.33 1272.08 1053.19 1272.48 1053.12C1273.26 1052.97 1273.94 1053.11 1274.52 1053.52C1274.81 1053.73 1275.05 1053.99 1275.25 1054.3C1275.45 1054.61 1275.58 1054.97 1275.66 1055.37L1275.78 1056.02L1274.13 1056.33L1274.02 1055.78C1273.96 1055.46 1273.82 1055.19 1273.59 1054.99C1273.36 1054.79 1273.09 1054.71 1272.78 1054.77C1272.37 1054.85 1272.12 1055.03 1272.03 1055.31C1271.94 1055.59 1271.94 1055.92 1272.01 1056.31L1273.12 1062.21C1273.19 1062.54 1273.31 1062.81 1273.5 1063.01C1273.69 1063.21 1273.97 1063.27 1274.35 1063.2C1274.46 1063.18 1274.57 1063.14 1274.69 1063.08C1274.8 1063.02 1274.91 1062.93 1275 1062.82C1275.08 1062.72 1275.14 1062.59 1275.18 1062.42C1275.21 1062.26 1275.21 1062.06 1275.17 1061.84L1275.06 1061.27L1276.71 1060.96Z"/>
<Path d="M1278.67 1063.99L1276.5 1052.46L1278.15 1052.15L1279.08 1057.09L1281.13 1056.71L1280.19 1051.77L1281.85 1051.45L1284.02 1062.99L1282.37 1063.3L1281.4 1058.16L1279.36 1058.55L1280.33 1063.68L1278.67 1063.99Z"/>
<Path d="M1288.75 1050.15L1290.43 1059.09C1290.5 1059.47 1290.5 1059.83 1290.43 1060.18C1290.35 1060.52 1290.21 1060.84 1290.01 1061.14C1289.81 1061.43 1289.56 1061.68 1289.26 1061.88C1288.96 1062.08 1288.63 1062.22 1288.27 1062.29C1287.9 1062.36 1287.54 1062.35 1287.2 1062.27C1286.85 1062.19 1286.53 1062.05 1286.24 1061.85C1285.94 1061.65 1285.69 1061.4 1285.49 1061.11C1285.29 1060.81 1285.16 1060.48 1285.09 1060.1L1283.4 1051.16L1285.05 1050.85L1286.71 1059.63C1286.79 1060.04 1286.94 1060.32 1287.17 1060.48C1287.4 1060.64 1287.66 1060.69 1287.95 1060.64C1288.25 1060.58 1288.47 1060.44 1288.63 1060.21C1288.79 1059.98 1288.83 1059.65 1288.75 1059.24L1287.09 1050.47L1288.75 1050.15Z"/>
<Path d="M1291.72 1057.75L1291.41 1056.09L1296.28 1055.17L1296.59 1056.83L1291.72 1057.75Z"/>
<Path d="M1300.7 1047.9L1299.73 1053.1L1299.77 1053.13C1299.82 1053.07 1299.89 1053.02 1300 1052.97C1300.11 1052.92 1300.26 1052.88 1300.44 1052.85C1300.73 1052.79 1301.02 1052.81 1301.29 1052.91C1301.56 1053 1301.79 1053.14 1301.97 1053.33C1302.07 1053.44 1302.15 1053.54 1302.22 1053.65C1302.28 1053.76 1302.35 1053.91 1302.42 1054.1C1302.48 1054.29 1302.54 1054.53 1302.61 1054.83C1302.68 1055.12 1302.75 1055.5 1302.84 1055.95C1302.91 1056.33 1302.96 1056.64 1303 1056.89C1303.03 1057.13 1303.05 1057.34 1303.06 1057.5C1303.06 1057.68 1303.05 1057.84 1303.02 1057.96C1303 1058.09 1302.96 1058.23 1302.91 1058.37C1302.76 1058.77 1302.52 1059.1 1302.2 1059.36C1301.87 1059.62 1301.48 1059.8 1301.03 1059.88C1300.57 1059.97 1300.15 1059.94 1299.76 1059.81C1299.36 1059.68 1299.03 1059.46 1298.74 1059.16C1298.63 1059.04 1298.54 1058.93 1298.47 1058.82C1298.4 1058.71 1298.34 1058.57 1298.28 1058.4C1298.22 1058.25 1298.16 1058.05 1298.1 1057.81C1298.05 1057.57 1297.98 1057.26 1297.91 1056.88C1297.85 1056.52 1297.8 1056.23 1297.76 1055.99C1297.73 1055.76 1297.71 1055.55 1297.7 1055.38C1297.69 1055.21 1297.69 1055.06 1297.71 1054.91C1297.73 1054.77 1297.75 1054.62 1297.78 1054.46L1298.85 1048.25L1300.7 1047.9ZM1300.97 1055.11C1300.92 1054.87 1300.8 1054.68 1300.61 1054.56C1300.42 1054.44 1300.22 1054.4 1300 1054.44C1299.79 1054.48 1299.61 1054.59 1299.48 1054.77C1299.35 1054.96 1299.3 1055.17 1299.35 1055.42L1299.75 1057.56C1299.8 1057.81 1299.92 1057.99 1300.11 1058.11C1300.3 1058.23 1300.5 1058.27 1300.72 1058.23C1300.93 1058.19 1301.11 1058.08 1301.24 1057.9C1301.37 1057.72 1301.42 1057.5 1301.37 1057.25L1300.97 1055.11Z"/>
<Path d="M1306.72 1046.77L1305.76 1051.96L1305.8 1051.99C1305.84 1051.94 1305.92 1051.89 1306.03 1051.84C1306.14 1051.79 1306.28 1051.75 1306.47 1051.71C1306.76 1051.66 1307.04 1051.68 1307.32 1051.77C1307.59 1051.86 1307.82 1052.01 1308 1052.2C1308.1 1052.3 1308.18 1052.41 1308.24 1052.52C1308.31 1052.63 1308.38 1052.78 1308.45 1052.97C1308.5 1053.16 1308.57 1053.4 1308.63 1053.69C1308.7 1053.99 1308.78 1054.36 1308.86 1054.82C1308.93 1055.2 1308.99 1055.51 1309.02 1055.75C1309.06 1056 1309.08 1056.2 1309.09 1056.37C1309.09 1056.55 1309.07 1056.7 1309.05 1056.83C1309.02 1056.96 1308.98 1057.09 1308.93 1057.24C1308.78 1057.63 1308.55 1057.96 1308.22 1058.23C1307.9 1058.49 1307.51 1058.66 1307.05 1058.75C1306.6 1058.83 1306.18 1058.81 1305.78 1058.68C1305.39 1058.54 1305.05 1058.32 1304.77 1058.02C1304.66 1057.91 1304.57 1057.8 1304.5 1057.69C1304.43 1057.58 1304.36 1057.44 1304.31 1057.27C1304.25 1057.11 1304.19 1056.91 1304.13 1056.67C1304.07 1056.43 1304.01 1056.12 1303.94 1055.74C1303.87 1055.39 1303.82 1055.09 1303.79 1054.86C1303.76 1054.62 1303.73 1054.42 1303.72 1054.24C1303.71 1054.08 1303.72 1053.92 1303.74 1053.78C1303.75 1053.64 1303.77 1053.48 1303.8 1053.32L1304.88 1047.11L1306.72 1046.77ZM1306.99 1053.98C1306.95 1053.73 1306.83 1053.55 1306.64 1053.42C1306.45 1053.3 1306.24 1053.26 1306.03 1053.31C1305.81 1053.35 1305.64 1053.46 1305.5 1053.64C1305.37 1053.82 1305.33 1054.04 1305.37 1054.28L1305.78 1056.42C1305.82 1056.67 1305.94 1056.85 1306.13 1056.98C1306.32 1057.1 1306.53 1057.14 1306.74 1057.09C1306.96 1057.05 1307.13 1056.94 1307.27 1056.76C1307.4 1056.58 1307.44 1056.36 1307.4 1056.12L1306.99 1053.98Z"/>
<Path d="M1312.36 1057.65L1311.44 1052.77L1307.92 1046.54L1309.67 1046.21L1311.86 1050.54L1311.9 1050.54L1312.36 1045.71L1314.11 1045.38L1313.1 1052.46L1314.02 1057.33L1312.36 1057.65Z"/>
</G>
<Path d="M1050.85 208.554C1050.85 208.554 1065.08 201.912 1076.82 199.647C1083.1 198.437 1089.99 197.508 1096.35 197.508C1114.63 197.508 1141.13 207.072 1141.13 207.072L1132.9 240.626L1117.92 240.626C1117.92 240.626 1106.72 251.191 1096.35 251.191C1085.99 251.191 1076.47 240.626 1076.47 240.626L1059.81 240.626L1050.85 208.554Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M904.543 293.402C904.543 293.402 913.946 280.75 922.161 273.138C930.377 265.527 943.651 256.681 943.651 256.681L944.664 274.725L923.785 293.402L904.543 293.402Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
<Path d="M1293.15 293.402C1293.15 293.402 1283.74 280.75 1275.53 273.138C1267.31 265.527 1254.04 256.681 1254.04 256.681L1253.03 274.725L1273.91 293.402L1293.15 293.402Z" fill="#dedede" fill-rule="nonzero" opacity="1" stroke="#000000" stroke-linecap="butt" stroke-linejoin="round" stroke-width="5.15015"/>
</G>
</Svg>

    )
};
export default CHUBBY_Front;

const styles = StyleSheet.create({
    image: {
      justifyContent: 'center',
      fillRule: 'nonzero',
      clipRule: 'evenodd',
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
        width: 400,
        height: 300,
        marginTop: -40,
    },
  });