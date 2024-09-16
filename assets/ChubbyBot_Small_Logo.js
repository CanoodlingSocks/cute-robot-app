import * as React from "react";
import { G, Path, Svg } from "react-native-svg";
import { StyleSheet } from 'react-native';

function LoGoSvg() {
  return (
    <Svg
      xmlns="http://www.w3.orG/2000/Svg"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      clipRule="evenodd"
          viewBox="0 0 530.45 395.912"
          style={styles.logo}
    >
      <G stroke="#000" strokeLinecap="butt" strokeLinejoin="miter">
        <G strokeWidth="5.947">
          <Path
            fill="#fff"
            d="M25.698 164.227c0-75.204 104.583-136.168 233.592-136.168 129.009 0 233.591 60.965 233.591 136.168 0 75.204-104.582 136.169-233.591 136.169-129.009 0-233.592-60.965-233.592-136.169z"
          ></Path>
          <Path
            fill="#f4ba1f"
            d="M77.303 160.921c0-44.204 57.991-81.347 136.477-91.881 14.545-1.953 29.795 47.46 45.51 47.46 14.831 0 29.248-49.526 43.05-47.781 79.731 10.082 138.936 47.538 138.936 92.202 0 52.397-81.478 94.873-181.986 94.873S77.303 213.318 77.303 160.921z"
          ></Path>
          <G fill="none">
            <Path d="M213.288 172.067s12.741 12.196 12.741 24.365c0 12.169-12.741 24.31-12.741 24.31M305.292 172.067s-12.741 12.196-12.741 24.365c0 12.169 12.741 24.31 12.741 24.31M226.029 196.405h66.522"></Path>
          </G>
          <Path
            fill="none"
            d="M157.587 142.212s7.045-17.916 26.788-17.588c19.742.327 28.913 17.198 28.913 17.198M360.993 142.212s-7.045-17.916-26.788-17.588c-19.742.327-28.913 17.198-28.913 17.198"
          ></Path>
        </G>
        <G fill="#f4ba1f" strokeWidth="6.517">
          <Path d="M74.658 303.082l-2.49 6.112c-1.245 3.057-3.002 5.715-5.273 7.976a25.94 25.94 0 01-7.763 5.341 24.943 24.943 0 01-9.22 2.156c-3.24.138-6.436-.435-9.585-1.717-2.685-1.094-5.267-2.577-7.743-4.45a20.938 20.938 0 01-5.918-6.945c-1.468-2.758-2.326-5.887-2.573-9.389-.247-3.502.553-7.522 2.402-12.06l22.18-54.457c1.32-3.241 3.102-6.025 5.345-8.35 2.243-2.326 4.798-4.093 7.665-5.3 2.867-1.208 5.95-1.815 9.245-1.823 3.297-.007 6.658.688 10.085 2.083 6.668 2.716 11.2 7.099 13.594 13.15 1.17 2.959 1.74 6.134 1.709 9.523-.03 3.389-.744 6.796-2.14 10.223l-2.263 5.557-14.17-5.772 1.924-4.723c1.132-2.778 1.326-5.507.581-8.186-.745-2.678-2.46-4.565-5.145-5.659-3.52-1.433-6.301-1.297-8.346.408-2.044 1.704-3.745 4.224-5.103 7.558L41.06 294.905c-1.169 2.871-1.525 5.533-1.066 7.987.458 2.454 2.308 4.341 5.549 5.662.926.377 1.988.62 3.185.73a9.608 9.608 0 003.637-.381c1.136-.401 2.245-1.137 3.329-2.208 1.084-1.07 2.022-2.577 2.814-4.522l1.98-4.862 14.17 5.771zM81.366 336.513l24.298-103.999 14.899 3.481-8.669 37.1.293.069c2.104-1.973 4.427-3.459 6.971-4.456 2.544-.998 5.52-1.098 8.928-.302 1.85.432 3.626 1.181 5.329 2.246 1.702 1.066 3.113 2.499 4.232 4.301 1.12 1.802 1.85 3.95 2.192 6.443.342 2.493.126 5.395-.648 8.706l-13.275 56.819-14.899-3.48 11.979-51.27c.637-2.726.504-5.017-.398-6.87-.902-1.854-2.521-3.054-4.858-3.6-2.824-.66-4.976-.238-6.457 1.264-1.481 1.503-2.608 3.909-3.381 7.22l-11.638 49.809-14.898-3.481zM193.389 279.428l-9.64 75.437-15.177-1.94.932-7.29-.297-.038c-1.892 2.178-4.052 3.893-6.48 5.145-2.428 1.252-5.378 1.657-8.85 1.213-1.885-.241-3.728-.804-5.53-1.69-1.803-.885-3.353-2.167-4.651-3.845-1.297-1.678-2.244-3.74-2.839-6.185-.594-2.445-.676-5.354-.245-8.726l7.396-57.88 15.176 1.94-6.673 52.225c-.355 2.777.011 5.042 1.097 6.794 1.087 1.752 2.821 2.78 5.201 3.084 2.877.367 4.975-.272 6.294-1.918 1.32-1.646 2.195-4.155 2.626-7.528l6.483-50.737 15.177 1.939zM196.335 355.866l4.182-106.718 15.288.599-1.474 37.621.3.012c1.796-2.432 3.895-4.276 6.296-5.533 2.401-1.257 5.1-1.827 8.098-1.709 3.697.145 6.545.907 8.542 2.286a16.373 16.373 0 014.828 5.143c.936 1.638 1.503 3.762 1.701 6.372.198 2.609.19 6.662-.026 12.158l-1.133 28.928c-.165 4.196-.496 7.536-.994 10.018-.497 2.483-1.229 4.556-2.195 6.219-2.786 4.695-7.326 6.919-13.622 6.672-3.797-.149-6.665-1.012-8.605-2.589-1.939-1.577-3.816-3.502-5.628-5.775l-.27 6.895-15.288-.599zm32.488-51.417c.094-2.399-.348-4.518-1.327-6.357-.979-1.84-2.917-2.817-5.815-2.93-2.198-.086-4.052.617-5.562 2.109-1.509 1.492-2.311 3.437-2.405 5.835l-1.157 29.527c-.11 2.798.501 5.099 1.831 6.902 1.33 1.804 3.145 2.75 5.443 2.841 2.598.101 4.534-.774 5.807-2.625 1.274-1.852 1.971-4.326 2.092-7.424l1.093-27.878zM254.672 357.623l-4.503-106.705 15.286-.645 1.588 37.616.299-.012c1.593-2.57 3.535-4.578 5.826-6.026 2.291-1.448 4.936-2.235 7.933-2.362 3.697-.156 6.597.373 8.699 1.585a16.362 16.362 0 015.23 4.734c1.066 1.556 1.804 3.627 2.214 6.212.409 2.585.73 6.625.961 12.12l1.221 28.924c.177 4.197.118 7.552-.176 10.067-.294 2.514-.855 4.64-1.682 6.376-2.396 4.906-6.741 7.491-13.035 7.757-3.797.16-6.726-.467-8.787-1.881-2.062-1.415-4.088-3.181-6.079-5.299l.291 6.894-15.286.645zm28.203-53.887c-.101-2.398-.714-4.474-1.839-6.228-1.125-1.754-3.137-2.57-6.034-2.448-2.198.093-3.989.944-5.372 2.554-1.383 1.61-2.025 3.614-1.923 6.011l1.245 29.524c.118 2.798.914 5.041 2.386 6.731 1.473 1.689 3.358 2.485 5.656 2.388 2.598-.109 4.456-1.139 5.575-3.088 1.119-1.948 1.613-4.472 1.482-7.569l-1.176-27.875zM297.296 279.877l16.079-1.971 16.19 45.77.298-.037 4.505-48.307 15.633-1.916-10.877 91.251c-.381 3.472-1.157 6.388-2.328 8.749-1.172 2.36-2.615 4.35-4.331 5.971-1.715 1.621-3.607 2.835-5.674 3.642a26.764 26.764 0 01-6.525 1.631l-4.169.511-1.752-14.293 3.425-.419c1.489-.183 2.755-.54 3.798-1.07 1.043-.531 1.926-1.546 2.649-3.045.624-1.487 1.128-3.539 1.512-6.155.385-2.616.75-6.213 1.096-10.789l-29.529-69.523z"></Path>
          <Path d="M366.236 347.694L343.4 243.364l21.833-4.779c4.786-1.047 9.025-1.208 12.716-.48 3.691.728 6.878 2.077 9.562 4.049 2.684 1.972 4.837 4.444 6.46 7.415 1.623 2.972 2.809 6.167 3.557 9.586l.834 3.81c.62 2.833.924 5.275.912 7.325-.012 2.05-.297 3.903-.855 5.561-1.062 3.099-3.089 5.999-6.08 8.701 3.88.891 7.003 2.767 9.369 5.627 2.367 2.86 4.159 7.074 5.378 12.643l1.283 5.861c2.01 9.182 1.327 16.702-2.049 22.56-3.375 5.857-9.947 9.855-19.716 11.993l-20.368 4.458zm4.362-51.627l7.313 33.409 6.447-1.411c3.028-.663 5.301-1.621 6.818-2.874 1.517-1.253 2.544-2.758 3.081-4.513.537-1.756.668-3.729.393-5.921a79.832 79.832 0 00-1.246-7.098c-.577-2.638-1.226-4.901-1.947-6.791-.721-1.889-1.67-3.422-2.849-4.597-1.276-1.154-2.814-1.866-4.614-2.138-1.8-.271-4.067-.108-6.802.491l-6.594 1.443zm-9.173-41.907l6.286 28.72 6.741-1.476c4.982-1.09 8.055-3.068 9.219-5.933 1.164-2.866 1.223-6.691.175-11.478-1.026-4.689-2.749-7.997-5.167-9.925-2.418-1.927-6.118-2.346-11.1-1.255l-6.154 1.347zM409.841 286.065c-1.012-2.931-1.753-5.69-2.224-8.278-.47-2.588-.512-5.007-.125-7.256.624-3.707 2.192-7.053 4.706-10.037 2.514-2.984 6.039-5.259 10.576-6.826 4.537-1.567 8.715-1.952 12.534-1.155 3.82.796 7.119 2.46 9.898 4.992 1.692 1.531 3.152 3.461 4.379 5.788 1.227 2.326 2.346 4.955 3.358 7.885l8.178 23.678c1.012 2.93 1.753 5.689 2.224 8.277.471 2.588.513 5.007.126 7.257-.624 3.707-2.193 7.052-4.707 10.036-2.513 2.984-6.039 5.26-10.576 6.827-4.537 1.567-8.715 1.952-12.534 1.155-3.819-.797-7.119-2.461-9.897-4.993-1.693-1.531-3.153-3.46-4.379-5.787-1.227-2.327-2.347-4.956-3.359-7.886l-8.178-23.677zm23.423 20.951c.947 2.741 2.295 4.576 4.045 5.506 1.749.93 3.711 1.02 5.885.269s3.662-2.032 4.465-3.843c.802-1.812.73-4.088-.216-6.829l-9.745-28.215c-.947-2.741-2.295-4.576-4.044-5.506-1.75-.93-3.711-1.019-5.885-.268-2.174.75-3.663 2.031-4.465 3.843-.803 1.811-.731 4.087.216 6.828l9.744 28.215zM452.301 243.032l-10.418-20.617 13.655-6.9 10.418 20.617 8.435-4.262 5.412 10.71-8.435 4.262 19.01 37.62c.812 1.607 1.599 2.777 2.363 3.512.763.735 1.614 1.145 2.554 1.23.939.086 1.945-.086 3.016-.516 1.072-.429 2.366-1.027 3.884-1.794l6.494 12.853-5.623 2.841c-3.124 1.578-5.982 2.407-8.576 2.485-2.594.078-4.898-.326-6.915-1.212a16.515 16.515 0 01-5.349-3.767c-1.549-1.626-2.775-3.332-3.677-5.117l-20.836-41.234-6.828 3.45-5.412-10.711 6.828-3.45z"></Path>
        </G>
      </G>
    </Svg>
  );
}
export default LoGoSvg;

const styles = StyleSheet.create({
    logo: {
      width: 200,
      height: 150, 
      margin: 8,
    },
  });