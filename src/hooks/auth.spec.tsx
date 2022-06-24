import React from "react";
import { act, renderHook } from "@testing-library/react-hooks";
import { AuthProvider, useAuth } from "./auth";

// const Providers: React.FC = ({ children }) => (
//   <ThemeProvider theme={theme}>{children}</ThemeProvider>
// );

jest.mock("expo-google-app-auth", () => {
  return {
    logInAsync: () => {
      return {
        type: "success",
        user: {
          id: "any_email",
          email: "lucas.oliveira@gmail.com",
          name: "Lucas",
          photo: "any_photo.png",
        },
      };
    },
  };
});

describe("Auth Hook", () => {
  it("should be able to sign in with Google account existing", async () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    await act(() => result.current.signInWithGoogle());

    expect(result.current.user).toBeTruthy();
  });
});
