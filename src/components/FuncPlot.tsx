"use client";
import React from "react";
import { FunctionPlotMobile } from "../icons";
import {
  Expression,
  GraphingCalculator,
  useHelperExpression,
} from "desmos-react";

const FunctionPlot = (props) => {
  const calc = React.useRef() as React.MutableRefObject<Desmos.Calculator>;
  React.useEffect(() => {
    calc.current.setMathBounds({
      bottom: -0.25,
      left: -0.25,
      top: 3.25,
      right: 4.25,
    });
  }, [calc]);
  return (
    <>
      {props.matches ? (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-5xl">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-lg">
              No Liquidation. Infinite Liquidity.
            </p>
          </div>
          {/* <FunctionPlotTemplate /> */}
          <GraphingCalculator
            attributes={{ className: "calculator" }}
            fontSize={18}
            keypad
            projectorMode
            settingsMenu={false}
            expressionsCollapsed={true}
            expressions={false}
            zoomButtons={false}
            lockViewport={true}
            invertedColors
            border={false}
            showGrid={false}
            xAxisNumbers={false}
            yAxisNumbers={false}
            ref={calc}
            xAxisArrowMode="POSITIVE"
            yAxisArrowMode="POSITIVE"
            xAxisLabel="Price"
            yAxisLabel="Value"
          >
            <Expression id="f" latex={process.env.REACT_APP_FX} hidden/>
            <Expression id="g" latex={process.env.REACT_APP_GX} hidden/>
            <Expression id="lR" latex="(0.45,3.1)" color="RED" hidden showLabel label="Pool Reserve" labelOrientation="RIGHT"/>
            <Expression id="R" latex="y=3\{0.02<x\}" color="RED" lineWidth={1.5}/>
            <Expression id="rC" latex="x=X\{f(X)<y<g(X)\}" color="ORANGE" lineStyle="DASHED" lineWidth={1.5}/>
            <Expression id="short" latex="g(x)\{0.02<x\}" color="GREEN"/>
            <Expression id="long" latex="f(x)\{0.02<x\}" color="PURPLE"/>
            <Expression id="X" latex="X=1" sliderBounds={{ min: 0.02, max: "", step: "" } }/>
            <Expression id="p" latex="p=\operatorname{round}\left(X\cdot2000\right)" hidden/>
            <Expression id="Price" latex="(X,-0.1)" color="BLACK" hidden showLabel label="$${p}" labelOrientation="BELOW"/>
            <Expression id="S" latex="(X,g(X))" color="GREEN"/>
            <Expression id="L" latex="(X,f(X))" color="PURPLE"/>
            <Expression id="rB" latex="x=X\{g(X)<y<3\}" color="GREEN" lineStyle="DASHED" lineWidth={1.5}/>
            <Expression id="rA" latex="x=X\{0<y<f(X)\}" color="PURPLE" lineStyle="DASHED" lineWidth={1.5}/>
            <Expression id="lC" latex="(X+0.15,(1.1g(X)+f(X))/2.1)" color="ORANGE" hidden showLabel label="LP" labelOrientation="RIGHT"/>
            <Expression id="lB" latex="(X-0.3,(g(X)+3)/2)" color="GREEN" hidden showLabel label="Short" labelOrientation="LEFT"/>
            <Expression id="lA" latex="(X+0.25,0.55f(X))" color="PURPLE" hidden showLabel label="Long" labelOrientation="RIGHT"/>
          </GraphingCalculator>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center mt-[57px] pb-[120px]">
          <div className="flex flex-col items-center justify-center text-center gap-6">
            <p className="text-heading text-[34px]">ASYMPTOTIC POWER CURVES</p>
            <p className="text-normal text-base">
              No Liquidation. Infinite Liquidity.
            </p>
          </div>
          <FunctionPlotMobile />
        </div>
      )}
    </>
  );
};

export default FunctionPlot;
