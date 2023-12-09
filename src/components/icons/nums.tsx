import { defineComponent } from "vue";

const allNumbs = [
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M305.525 887.319l-78.413 69.09-23.62-24.585c-11.945-13.833-19.266-27.627-20.5-41.46-0.385-4.586 0.58-10.751 0.193-15.298l27.397-300.936 65.35-59.88 57.452 59.88-27.86 313.189z m38.61-435.991l-68.202 62.961-54.64-62.961 22.696-267.105c3.006-18.457 3.584-29.17 4.586-35.335 1.85-13.794 8.593-24.583 21.462-35.295l41.306-36.837 59.61 67.547-26.819 307.025z m283.442 449.825l66.314 73.673-34.14 30.75c-14.139 13.755-30.632 18.417-59.802 18.417H329.761c-29.168 0-46.584-6.165-58.413-18.418l-27.281-30.75 82.612-73.672h300.898z m-233.89-778.314l-64.118-66.005 29.554-30.75C377.465 7.669 395.228 0 418.233 0H699.17c21.5 0 42.384 10.75 56.025 26.086l24.044 29.208-80.07 67.546H393.687zM680.329 574.13l68.28-61.383 54.522 61.383-22.81 265.602c-1.31 19.96-3.315 32.251-2.93 36.875-1.85 13.756-8.747 23.004-23.004 35.258l-44.504 35.295-56.026-61.382 26.472-311.648z m39.149-429.827l79.915-69.089 18.766 21.501c13.64 15.336 20.96 29.17 22.31 44.505 0.54 6.166 1.079 12.292 0.077 18.419l-25.123 291.688-69.86 61.46-52.981-61.46 26.896-307.024z"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M416.116778 121.565204 358.155952 66.84561 426.75564 0l220.289268 0L513.315556 121.565204 416.116778 121.565204zM496.194233 568.168615l64.977136-56.24488L617.759438 568.168615 582.410961 963.217398l-66.082967 60.782602L460.883889 963.217398 496.194233 568.168615zM533.563713 144.330081l132.280331-120.001787L628.360168 446.641543l-67.188799 65.320325-54.338274-65.320325L533.563713 144.330081z"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M309.935797 885.784114 177.499744 1004.040223l32.482861-365.364754c0.770649-9.209257 1.502766-18.457047 3.891778-26.125006 2.427545-7.667959 4.932154-13.794619 9.132192-18.457047 0 0 8.554205-7.667959 22.657085-21.501111l41.037066-39.881093 50.747245 53.714245L309.935797 885.784114zM656.650842 901.158564l56.064724 61.420736-66.776747 61.420736L194.569622 1024.000036l138.17739-122.841472L656.650842 901.158564zM690.636469 552.671026c-16.954281 16.877216-30.363576 21.501111-65.659306 21.501111L360.95277 574.172137 305.042175 514.292699l43.695806-44.504987c5.625739-6.126661 12.869841-10.750555 20.268072-13.833152 7.398232-3.044064 13.409295-4.585362 21.077254-4.585362l24.583707 0 265.604224 0 55.872062 59.91797L690.636469 552.671026zM382.877738 122.841472 326.967143 62.923502 392.048462 0l313.191808 0c30.671835 0 45.198572 7.667959 62.26845 27.627771l20.576332 24.583707-78.259419 70.629993L382.877738 122.841472zM725.431277 142.762752l79.762185-70.629993 27.242447 30.710368c3.352324 3.082597 7.089972 10.750555 11.097348 21.501111 1.926623 4.623895 2.35048 9.24779 2.735804 13.833152 0.539454 6.126661-0.038532 16.877216-0.385325 30.710368l-21.578176 227.187364c-2.19635 27.666304-7.359699 38.416859-27.126849 58.338139l-42.578365 39.919625-55.756465-58.338139L725.431277 142.762752z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M606.286201 901.158566l63.000567 70.629993-32.636991 30.710368c-17.069878 15.297385-36.490237 21.501111-71.785967 21.501111L265.505153 1024.000039 209.594558 964.120601l77.373173-62.962034L606.286201 901.158566zM645.242515 451.330666l58.993191 59.91797L634.491959 574.133606 316.714788 574.133606l-60.804217-62.923502 71.51624-59.91797L645.242515 451.292134zM355.516972 122.841472l-57.413361-59.91797L366.267528 0l302.441253 0c13.833152 0 23.158007 1.502766 26.240603 1.502766 10.904685 1.541298 27.203914 12.291854 40.805872 27.704836l20.576332 24.545175-81.457614 69.088695L355.516972 122.841472zM652.987538 592.55212l69.589617-64.4648 27.011252 27.627772c15.297385 16.877216 20.961656 29.16907 22.464422 46.084818 0.693584 7.667959 1.348636 15.297385 0.462389 23.003877l-22.002033 239.517751c-2.19635 27.627772-8.7854 39.919625-30.093849 59.879438l-35.681055 30.710368-57.952815-66.044631L652.987538 592.55212zM693.215423 139.680156l80.031913-67.547397 20.306605 21.501111c11.983594 13.833152 19.304761 27.666304 20.653397 43.002222 0.539454 6.126661-0.038532 16.877216-1.541298 35.29573l-20.422202 222.602003c-2.04222 29.16907-7.244102 39.919625-24.198383 56.796841l-45.352702 42.963689-57.336296-58.33814L693.215423 139.680156z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M323.634639 438.182194l-63.990551 60.248634L231.371831 468.306511c-14.854274-15.04326-23.849993-31.636203-25.172892-46.679463-0.52916-5.971947 0.037797-16.555145 0.226783-31.636203L236.625633 63.234608 303.375374 0l53.70973 63.234608L323.634639 438.182194zM647.064729 451.713569l55.108224 61.76052-73.175255 58.736749L380.557126 572.210837c-13.569172 0-22.602687 0-27.251735-1.511885-13.531375 0-30.766868-7.52163-38.968847-15.04326l-38.175107-40.631921 68.261627-63.272405L647.064729 451.751366zM738.533798 963.751366l-65.502436 60.248634-54.957035-60.248634 33.563856-373.511295 64.255131-57.224863 56.204341 57.224863L738.533798 963.751366zM784.41952 438.182194l-65.502436 60.248634-53.596338-61.76052 32.20316-371.923815L764.160256 0l53.860918 64.746493L784.41952 438.182194z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M344.615008 435.956216l-65.543709 58.33814-28.899343-32.213134c-15.181788-15.335918-22.657085-30.710368-24.121318-47.549052-0.539454-6.165193-1.194506-13.833152-0.462389-23.080942l33.369108-373.032714 111.782657 119.720343L344.615008 435.956216zM627.828565 901.158566l64.541865 70.629993-31.249822 29.16907c-18.341449 18.418514-34.833341 23.042409-70.129071 23.042409L293.174178 1024.000039l-57.413361-59.879438 68.163916-62.962034L627.828565 901.158566zM395.477851 122.841472 281.884168 0l449.789368 0 57.798685 64.503333-68.549241 58.33814L395.477851 122.841472zM634.571745 451.330666c36.837029 0 41.730651 3.044064 68.818968 32.290199l27.12685 29.16907L657.575622 574.133606 408.887146 574.133606c-47.587584 0-58.761997-4.585362-84.077821-30.710368l-27.12685-29.16907 71.246513-62.962034L634.571745 451.292134zM678.88407 589.508056l68.433643-59.879438 30.325043 30.710368c11.829464 12.253321 19.535956 30.710368 20.768994 44.504988 0.655052 7.667959 0.192662 19.959813-0.115597 33.792965l-18.726774 207.227552c-2.928467 36.837029-11.790932 58.376672-26.047941 70.629993l-42.693962 38.378327-57.837218-64.503333L678.88407 589.508056z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M326.20594 885.784116l-75.562148 66.006098-27.280979-30.710368c-11.945062-13.756087-17.493735-24.545175-18.572644-36.837029-0.539454-6.165193 0.038532-16.877216 0.770649-26.125006l23.119474-262.521628 70.976785-66.006098 52.558271 56.796841L326.20594 885.784116zM366.703552 435.956216l-65.505177 58.33814-57.336296-58.33814 22.541487-268.648289c3.467921-30.710368 8.515673-43.002222 29.939719-61.420736l37.068223-32.251666 59.378516 64.503333L366.703552 435.956216zM649.955642 901.158566l63.116164 72.171292-25.624084 23.003877c-25.624084 23.042409-39.033379 27.666304-82.0356 27.666304L372.059564 1024.000039c-50.670181 0-58.607867-3.082597-80.686964-27.666304l-21.9635-23.003877 79.646588-72.171292L649.955642 901.158566zM659.742886 451.330666c30.710368 0 40.15082 3.044064 60.611554 26.125006l29.16907 35.334263L679.664166 574.133606 377.222913 574.133606l-57.56749-61.382204 68.318046-61.459269L659.742886 451.292134zM414.522331 122.841472 352.061219 58.33814l35.411328-33.754432C407.393827 6.126661 422.19029 0 459.027319 0l293.231996 0 60.495957 59.879438-71.246513 62.962034L414.522331 122.841472zM700.972615 589.508056l65.659306-56.796841 35.44986 36.837029c11.829464 12.253321 15.567113 19.959813 16.761619 33.754432 0.809182 9.209257 0.886247 27.666304-0.732117 44.504988l-17.5708 202.64219c-4.469765 36.875561-10.789088 52.211479-32.097536 72.171292l-35.411328 33.792965-59.648243-67.585929L700.972615 589.508056z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M303.741413 121.565204 247.305873 66.84561 314.380275 0l445.116258 0L624.28003 121.565204 303.741413 121.565204zM607.158707 568.168615l67.989573-56.24488 53.537499 56.24488-35.462873 393.485365-64.443286 62.307887L571.695834 961.692113 607.158707 568.168615zM644.528186 144.330081l132.165934-121.565204-37.369479 423.838534-64.176361 65.320325-57.350711-65.320325L644.528186 144.330081z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M303.949341 890.369478l-75.716278 64.503333-29.16907-35.334263c-8.47714-9.209257-14.179944-21.501111-15.37445-35.29573-0.539454-6.165193 0.346792-13.79462 1.194506-21.501111l19.651553-231.81126c2.735804-21.501111 8.900998-38.416859 21.655241-50.631648l52.519739-49.128882 52.288544 53.714245L303.949341 890.369478zM344.177225 437.497514l-64.118008 56.796841-30.440641-32.213134c-13.524892-13.79462-22.772682-32.251666-24.005721-46.046286-0.655052-7.667959 0.077065-16.877216 0.655052-27.666304l18.572644-208.768851c2.04222-29.16907 8.63127-41.422391 29.785589-62.923502L312.619143 76.756654l57.952815 66.006098L344.177225 437.497514zM633.440378 901.158566l61.613398 72.171292-31.36542 27.627772c-21.269916 19.959813-30.247979 23.042409-70.129071 23.042409L337.164318 1024.000039c-38.378327 0-54.138102-4.623895-69.551084-23.042409l-23.774526-26.125006 82.613587-73.674057L633.440378 901.158566zM673.899458 451.330666l56.180322 62.962034L661.646137 574.133606 356.122287 574.133606l-57.451893-59.879438 68.202448-62.962034L673.899458 451.292134zM393.421705 122.841472 332.501891 58.33814l30.941563-32.251666C381.669306 6.126661 394.963003 0 421.049477 0l277.857546 0c24.583707 0 38.917781 6.126661 54.484894 26.086473l28.822278 30.7489-80.224575 66.006098L393.421705 122.841472zM678.716015 594.093418l68.318046-61.382204 33.792965 35.29573c10.134036 10.750555 15.952437 24.545175 17.301073 39.919625 0.809182 9.170725 0.077065 18.418514-0.539454 29.16907l-20.036878 227.187365c-0.462389 12.291854-2.735804 21.501111-3.891778 26.086473-2.273415 9.209257-7.706491 16.915749-23.389201 30.710368l-38.378327 35.334263-59.494113-66.044631L678.716015 594.093418zM718.9439 141.221454l78.683277-66.006098L823.174195 104.384425c10.288166 12.291854 15.952437 24.583707 17.031346 36.837029 0.655052 7.667959-0.192662 15.335918-0.924779 24.583707l-18.765306 224.104769c-4.315635 38.378327-12.060659 55.294075-33.446172 73.71259l-36.952626 33.754432-57.451893-59.879438L718.9439 141.221454z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  () => (
    <svg
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M323.039165 434.45345 258.921157 491.250291l-36.875561-35.334263c-11.829464-12.214789-15.721242-21.462578-16.800151-33.754432-0.924779-10.712023-1.001844-29.16907 0.577987-46.046286l17.5708-202.64219c4.469765-36.837029 10.789088-52.172946 32.097536-72.171292l35.411328-33.754432 59.609711 67.547397L323.039165 434.45345zM609.489449 901.158566l61.035412 66.006098-34.024159 32.251666c-19.76715 19.959813-34.717744 24.583707-71.554772 24.583707L271.752465 1024.000039l-60.495957-59.879438 71.246513-62.962034L609.489449 901.158566zM364.423024 574.133606c-30.710368 0-40.343482-4.585362-60.765684-27.627772l-29.16907-35.29573 69.974941-59.91797 302.441253 0 57.451893 59.91797L636.153909 574.133606 364.423024 574.133606zM374.056138 122.841472 311.055571 52.172946l25.508486-24.583707C362.149609 4.585362 374.056138 0 418.561125 0l233.352558 0c50.631648 0 58.607867 3.044064 80.686964 27.627772l22.11763 24.583707-79.800718 70.629993L374.056138 122.841472zM657.423825 589.508056l68.279513-61.420736 54.523426 61.420736-22.695617 267.145523c-3.313791 32.213134-8.515673 42.963689-29.901186 61.382204l-36.952626 33.792965-59.494113-66.006098L657.423825 589.508056zM697.767307 138.17739l75.562148-66.044631 27.396577 32.251666c11.829464 12.291854 17.493735 24.583707 18.418514 35.29573 0.693584 7.706491-0.15413 15.37445-0.770649 26.125006l-23.350669 259.400499-70.591461 70.629993-52.712401-58.33814L697.767307 138.17739z"
        fill="currentColor"
      ></path>
    </svg>
  ),
];

export const IconNums = defineComponent({
  props: {
    num: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    return () => allNumbs[props.num]?.() || allNumbs[0]();
  },
});
