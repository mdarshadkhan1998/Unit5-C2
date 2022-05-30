import { render, screen } from "@testing-library/react";
import App from "../App";
test("Fake assertion", () => {
  expect(1).toBe(1);
});

describe("div",function(){
  it("Should have button in dom" ,function(){
      render(<App></App>);
      let div = screen.getByTestId("container");
      expect(div).toBeInTheDocument();
  });

});

describe("image tag",function(){
  it("consists img", function () {
    render(<Image src={"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.DSGaGTJv30wBkZechmQSawHaLH%26pid%3DApi&f=1"} alt={"sammy"}></Image>);

    let imgtag = screen.getByTestId("imgtag");
    expect(imgtag).toHaveAttribute("src","public.jpg");
    expect(imgtag).toHaveAttribute("alt","public");
  });
});



